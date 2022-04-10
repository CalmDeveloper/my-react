import {useEffect, useState} from "react";
import {User} from "../User/User";
import {usersService} from "../../services/users.service";
import  styles from './Users.module.css'



 const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        usersService.getAll().then(({ data }) => setUsers(data))
    }, []);
     const [user, setUser] = useState(null);
     const  getUserId = async (id) => {
         const {data} = await usersService.getById(id)
         setUser(data)
     }



    return (
        <div className={styles.UsersStyle}>
                <div>
                    {users.map((user) => <User key={user.name} user={user} getUserId={getUserId}/>)}
                </div>
            {user&& <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
        </div>}

        </div>

    );
}

export {Users}
