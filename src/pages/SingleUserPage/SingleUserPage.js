import {useLocation, useParams,Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {UserDetails} from "../../components/UserDetails/UserDetails";




const SingleUserPage = () => {
    const {state} = useLocation();
    const {id} =useParams()
const [user,setUserDetails] = useState(state)


useEffect(() => {
    if (!state){
        usersService.getUserById(id).then(({data}) => setUserDetails(data))
    }else
    {
        setUserDetails(state)
    }
},[id,state])

    return (
        <div>
            {user&& <UserDetails user={user}/>}
<div><Outlet/></div>
        </div>
    );
};

export {SingleUserPage};