import { useState } from "react";
function Scooter(){
    const [myScooter , setScooter] = useState ({
        name : "Activa 6G",
        color : "White",
        price : "Rs.50,000",
        Brand : "Honda"
    })

    function changeColor(){
    setScooter(prev =>{
        return{ ...prev, color : 'Black' }
        })
    }
    
    return(
        <>
            <h1>My Scooter</h1>
            <p>Name: {myScooter.name}</p>
            <p>Color: {myScooter.color}</p>
            <p>Price: {myScooter.price}</p>
            <p>Brand: {myScooter.Brand}</p>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default Scooter;