


import  styles from './Users.module.css'
import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {User} from "../User/User";



 const Users = ({setUser}) => {
    const [users,setUsers] = useState([])


     useEffect(() => {
         usersService.getAll().then(({ data }) => setUsers(data))
     }, []);


     const getUserById = async (id) => {
      const {data} =  await usersService.getById(id)
          setUser(data)
     }


    return (
        <div className={styles.UsersStyle}>
                <div>
                    {users.map(user => <User key={user.id} user={user}  setUser={setUser} getUserById={getUserById}/>)}
                </div>

        </div>

    );
}

export {Users};
