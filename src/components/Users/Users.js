
import {useEffect, useState} from "react";

import  styles from './Users.module.css'
import {User} from "../User/User";
import {usersService} from "../../services";


 const Users = ({getUser}) => {
     const [users, setUsers] = useState([]);
     const [user, setUser] = useState(null);

useEffect(() => {
usersService.getAll().then(({data}) =>setUsers(data) )
},[])

     const getUserId = async (id) => {
         const {data} = await usersService.getById(id);
         console.log(data)
         setUser(user)
     }

    return (
        <div className={styles.UsersStyle}>
                <div>
                    {users.map(user=> <User key={user.id} getUserId={getUserId} user={user} getUser={getUser}/>)}
                </div>

        </div>

    );
}

export {Users};
