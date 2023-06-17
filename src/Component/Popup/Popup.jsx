import React from 'react'
import "./Popup.css"

const Popup = ({display,users,setSelecteduser,setDisplay}) => {
  return (
    <div style={{display:display}} className='popUp'>
        {users && users.map((ele) => {
            return (
                <p onClick={() => {
                    setSelecteduser(ele.name)
                    setDisplay("none")
                }} className='userName'>{ele.name}</p>
            )
        })}
    </div>
  )
}

export default Popup