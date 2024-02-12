// import { useEffect, useState } from "react";
import { useEffect,useState } from "react"
function Timer(){
    const [count,setCount]  = useState(1)
    useEffect(()=>{
        console.log(`Screen Refreshed : ${count}`)
    },[count])
    
    function countIncrease(){
        setCount(()=> count >=  10 ? 1 : count+1 )
    }

    return(
        <>
            <h1>Screen Rendered : {count}</h1>
            <button onClick={countIncrease}>Render Screen</button>
        </>
    );
}
    


export default Timer