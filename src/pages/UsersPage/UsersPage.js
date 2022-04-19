import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {User} from "../../components/User/User";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
   const  [users,setUsers] =useState([])
useEffect(() => {
    usersService.getAll().then(({data})=>setUsers(data))
},[])
    return (
        <div style={{display:'flex'}}>
<div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div style={{marginLeft:'100px'}}><Outlet/></div>
        </div>

    );
};

export {UsersPage};