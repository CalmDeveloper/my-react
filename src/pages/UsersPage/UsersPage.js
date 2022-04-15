import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";



const UsersPage = () => {
  const [users,setUsers]  = useState([])
    useEffect(() => {
       userService.getAll().then(({data})=>setUsers(data))
    },[])
    return (
        <div style={{display:'flex'}}>
            <div style={{minWidth:'300px'}}>{users && users.map(user => <User key={user.id} user={user}/> )}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {UsersPage};