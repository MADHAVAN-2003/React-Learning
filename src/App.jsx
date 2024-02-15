import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

//JSON-SERVER URL
let dataApi = "http://localhost:8000/users";

function App() {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [updateUserValue, setUpdateUser] = useState([]);

  //GET OPERATION
  useEffect(() => {
    axios.get(dataApi).then((data) => setUserData(data.data));
  }, []);

  if (!userData) return null;

  //POST OPERATION
  function addUser() {
    axios
      .post(dataApi, {
        name: userName,
        email: userEmail,
        phone: userPhone,
      })
      .then((newUserData) => setUserData([...userData, newUserData.data]));
  }

  //SET THE UPDATE VALUES AS KEY VALUE
  function updateUserData(id, key, value) {
    // console.log("working");
    // console.log(key, value, "key values paris");
    setUpdateUser((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        [key]: value,
      },
    }));
  }

  //UPADATING ON onClick EVENT
  function updateUser(id) {
    const userToUpdate = userData.find((user) => user.id === id);
    let updateResponse = axios.put(`${dataApi}/${id}`, {
      name: updateUserValue[id]?.name || userToUpdate.name,
      email: updateUserValue[id]?.email || userToUpdate.email,
      phone: updateUserValue[id]?.phone || userToUpdate.phone,
    });
    //console.log(updateResponse);
  }

  //DELETE FUNCTION
  function deleteUser(id) {
    axios.delete(`${dataApi}/${id}`);
    axios.get(dataApi).then((data) => setUserData(data.data));
  }

  return (
    <div>
      <h1>CURD OPERATION</h1>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((eachData, index) => (
          <tr key={eachData.id}>
            <td>{index + 1}</td>
            <td
              contentEditable
              onInput={(e) =>
                updateUserData(eachData.id, "name", e.target.innerText)
              }
            >
              {eachData.name}
            </td>
            <td
              contentEditable
              onInput={(e) =>
                updateUserData(eachData.id, "email", e.target.innerText)
              }
            >
              {eachData.email}
            </td>
            <td
              contentEditable
              onInput={(e) =>
                updateUserData(eachData.id, "phone", e.target.innerText)
              }
            >
              {eachData.phone}
            </td>
            <td>
              <button onClick={() => updateUser(eachData.id)}>Update</button>
              <button onClick={() => deleteUser(eachData.id)}>Delete</button>
            </td>
          </tr>
        ))}

        {/* FOR ADDING NEW USER */}
        
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              placeholder="Enter Name.."
              onChange={(e) => setUserName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Email.."
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Phone.."
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </td>
          <td>
            <button onClick={addUser}>Add User</button>
          </td>
        </tr>
      </tbody>
    </div>
  );
}
export default App;
