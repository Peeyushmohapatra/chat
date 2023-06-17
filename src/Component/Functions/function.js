export function getUsers(e,setDisplay,setUsers,data){
    if(e.target.value === ""){
        setDisplay("none")
    }
    else if(e.target.value.length === 1 && e.target.value[0] === "@"){
        setDisplay("flex")
        setUsers(data)
    }
    else if(e.target.value.length > 1 &&  e.target.value[0] === "@" && e.target.value[1] !== " "){
        setUsers(data.filter((ele) => {
            if(ele.name.toUpperCase().includes((e.target.value.slice(1)).toUpperCase())){
                return ele
            }
        }))
        setDisplay("flex")
    }else{
        setDisplay("none")
    }
}


export function filterUser(id,userList,setUserlist){
    setUserlist(userList.filter((user) => {
        if(user.id !== id){
            console.log(user.id);
            return user
        }
    }));
}