import React, { useState } from 'react'
import "./Input.css";
import { data } from '../../JSONdata/json';


const Input = () => {
    const [boolean,setBoolean] = useState(false);
    const [user,setData] = useState([])
    function getCode(e){
        if(e.target.value === ""){
            setBoolean("")
        }
        else if(e.target.value.length === 1 && e.target.value[0] === "@"){
            console.log("All");
            setData("")
            // console.log("Hello");
            setBoolean(true)
        }
        else if(e.target.value.length > 1){
            console.log("Filter");
            setBoolean(false)
            setData(data.filter((ele) => {
                if(ele.name.toUpperCase().includes((e.target.value.slice(1)).toUpperCase())){
                    return ele
                }
            }))
        }
        // console.log();
    }
  return (
    <div>
        <input onChange={(e) => {
            getCode(e)
        }} type="text"/>

        {boolean ? 
        <div>
            {data.map((ele) => {
                return (
                    <p>{ele.name}</p>
                )
            })}
        </div>
        :  
       user.length !== 0 ?  <div>
       {user.map((ele) => {
           return (
               <p>{ele.name}</p>
           )
       })}
   </div> : "Input"
       }
    </div>
  )
}

export default Input