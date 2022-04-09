import {useEffect, useState} from "react";
import {User} from "../User/User";
import {usersService} from "../../services/users.service";


export const Users = ({ setUser, setUserIdForPosts }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({ data }) => setUsers(data))
    }, []);

    return (
        <div>
            {
                users.map((user) => <User key={user.name} user={user}/>)

            }
        </div>
    );
}

