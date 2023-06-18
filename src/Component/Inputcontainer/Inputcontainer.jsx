import React, { useState } from 'react'
import "./Inputcontainer.css"
import Input from '../Input/Input'

const Inputcontainer = ({setDisplay,setUsers,selectedUser}) => {
  const [bold,setBold] = useState("'Geologica', sans-serif");
  const [italic,setItalic] = useState("'Exo 2', sans-serif");
  return (
    <div className='inputContainer'>
        <div className="topContainer">
        <i class="fa-solid fa-bold"></i>
        <i class="fa-sharp fa-solid fa-italic"></i>
        </div>
        <div style={{fontFamily:italic}} className="bottomContainer">
          hello
            <Input setDisplay={setDisplay} setUsers={setUsers} selectedUser={selectedUser}/>
        </div>
    </div>
  )
}

export default Inputcontainer