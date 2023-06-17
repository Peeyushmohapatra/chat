import React from 'react'
import "./Inputcontainer.css"
import Input from '../Input/Input'

const Inputcontainer = ({setDisplay,setUsers,selectedUser}) => {
  return (
    <div className='inputContainer'>
        <div className="topContainer">
        <i class="fa-solid fa-bold"></i>
        <i class="fa-sharp fa-solid fa-italic"></i>
        </div>
        <div className="bottomContainer">
            <Input setDisplay={setDisplay} setUsers={setUsers} selectedUser={selectedUser}/>
        </div>
    </div>
  )
}

export default Inputcontainer