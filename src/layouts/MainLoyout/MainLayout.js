import css from './MainLayout.module.css'
import {NavLink,Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div>
<div className={css.header}>
    <NavLink to={'users'}>Users</NavLink>
    <NavLink to={'posts'}>Posts</NavLink>
    <NavLink to={'home'}>Home</NavLink>
</div>
            <Outlet/>
        </div>
    );
};

export  {MainLayout};