import { useState } from "react";

function List(){
    const [list,setList] = useState([])
    const [count,setCount] = useState(1)
    function addItem(){
        const itemName = 'Item'+ count
        setList((prev)=> {return[...prev , itemName]})
        setCount(count + 1)
    }
    return(
        <>
            <h1>My List</h1>
            <button onClick={addItem}>Add item</button>
            <ul>
                {
                    list.map((ele)=> <li>{ele}</li>)
                }
            </ul>
        </>
    );
}


export default List