import { useState } from "react";
function Form(){
    const [input , setInput ] = useState({})

    function handleForm(e){
        e.preventDefault();
        console.log(input)
    }
    return(
        <>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Enter Name " onChange={(e)=> setInput( (prev) => { return {...prev, name: e.target.value}}) }/><br />
                <input type="text" placeholder="Enter Age " onChange={(e)=> setInput( (prev) => { return {...prev, Age: e.target.value}}) }/><br />
                <input type="text" placeholder="Enter Email " onChange={(e)=> setInput( (prev) => { return {...prev, Email: e.target.value}}) }/><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
export default Form