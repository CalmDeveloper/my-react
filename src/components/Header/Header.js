import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {authActions} from "../../redux";

import {StyleSwitcher} from "../StyleSwitcher/StyleSwitcher";
import {LoginForm} from "../LoginForm/LoginForm";

import css from './header.module.css'
import {SortBar} from "../SortBar/SortBar";


const Header = () => {
    const {hideLoginForm, userName} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const resetAll = () => {
        dispatch(moviesActions.resetKeywords())
        dispatch(moviesActions.resetGenresArrForSearch(),
        dispatch(moviesActions.resetSortValue())
        )
    }
    const openLoginForm = () => {
        dispatch(authActions.openLoginForm())
    }
    const logOut = () => {
        dispatch(authActions.logOut())
        dispatch(authActions.hideLoginForm())
    }

    const letter = userName?.userName?.substring(0, 1)
    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'} onClick={() => resetAll()}>Home</NavLink>
            </div>
           <SortBar/>
            <h1>The world of movies</h1>
            <div className={css.StyleSwitcher}><StyleSwitcher/></div>

            {hideLoginForm && <LoginForm/>}

            {userName && <div className={css.isLoginBar}>
            <button onClick={logOut} className={css.logOutButton}>Logout</button>
                <div className={css.isLogin}>{letter}</div>
            </div>}

            {!userName && <button onClick={openLoginForm} className={css.loginButton}>Login</button>}
        </div>
    );
};

export {Header};