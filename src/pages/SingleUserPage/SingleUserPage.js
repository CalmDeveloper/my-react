import {useLocation, useParams,Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {UserDetails} from "../../components/UserDetails/UserDetails";




const SingleUserPage = () => {
    const {id} =useParams()
const [user,setUserDetails] = useState()


useEffect(() => {

        usersService.getUserById(id).then(({data}) => setUserDetails(data))
},[id,])

    return (
        <div>
            <div>
                {user&& <UserDetails user={user}/>}
            </div>

<div style={{marginTop:"20px"}}><Outlet/></div>
        </div>
    );
};

export {SingleUserPage};