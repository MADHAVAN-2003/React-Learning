import { useParams } from "react-router-dom";

function User(){
    const { userName } = useParams()
    return(
        <>
            <h1>Welcome User {userName}</h1>
        </>
    );
}

export default User