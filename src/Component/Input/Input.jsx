import React, { useEffect, useState } from 'react'
import "./Input.css";
import { data } from '../../JSONdata/json';
import { getUsers } from '../Functions/function';


const Input = ({setDisplay,setUsers,selectedUser}) => {

    const [user,setData] = useState([]);
    const [input,setInput] = useState("")

    useEffect(() => {
        setInput(selectedUser)
    },[selectedUser])
  return (
    <div className='input'>
        <input value={input} placeholder='Message'  onChange={(e) => {
            setInput(e.target.value)
            getUsers(e,setDisplay,setUsers,data)
        }} type="text"/>
    </div>
  )
}

export default Input