import css from "./MainLayout.module.css"
import {Outlet, Link, NavLink, useNavigate} from "react-router-dom"
import Button from "../../Button/Button";

const MainLayout = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={css.header}>
                <div>
                    <button onClick={()=>navigate(-1)}>prev</button>
                    <button onClick={()=>navigate(+1)}>next</button>
                </div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>

            </div>
            <hr/>
            <Outlet/>
        </div>


    );
};

export {MainLayout};