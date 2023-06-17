import React, { useState } from 'react'
import "./Userslist.css"
import { data } from '../../JSONdata/json'
import { filterUser } from '../Functions/function'



const Userslist = () => {
    const [userList,setUserlist] = useState(JSON.parse(JSON.stringify(data)));

  return (
    <div className='usersCont'>
        {userList && userList.map((user) => {
            user.name = user.name.replace(user.name[0],user.name[0].toUpperCase())
            return (
                <div className='list'>
                    <table>
                        <tr className='tr'>
                            <td className='usersname'>{user.name}</td>
                            <td><i style={{color:user.status ? 'green' : "gray"}} className="circle fa-solid fa-circle"></i></td>
                            <td onClick={() => {
                                filterUser(user.id,userList,setUserlist)
                            }}><i className="cross fa-solid fa-xmark"></i></td>
                        </tr>
                    </table>
                </div>
            )
        })}
    </div>
  )
}

export default Userslist