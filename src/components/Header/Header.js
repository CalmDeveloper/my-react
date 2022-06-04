import css from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {moviesActions} from "../../redux";
import {LoginForm} from "../LoginForm/LoginForm";
import {authActions} from "../../redux/slices/authSlice";




const Header = () => {
const {hideLoginForm,userName} = useSelector(state => state.auth)
   const  dispatch = useDispatch()

    const resetAll = () => {
      dispatch(moviesActions.resetKeywords())
        dispatch(moviesActions.resetGenresArrForSearch())
    }
    const openLoginForm = () => {
      dispatch(authActions.openLoginForm())
    }
    const logOut = () => {
      dispatch(authActions.logOut())
        dispatch(authActions.hideLoginForm())
    }

    const user = ()=>{
        if (userName){ return userName}
        else {
            return 'unknown'
        }
    }
    const userLetter = user()
    const letter = userLetter?.userName?.substring(0,1)

    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'} style={{position:"absolute", top:'10px',left:'20px'}} onClick={()=>resetAll()}>Movies</NavLink>
            </div>

                 <h1>The world of movies</h1>

            {hideLoginForm && <LoginForm/> }
            {userName &&  <div className={css.isLoginBar}><button onClick={logOut} className={css.logOutButton}>Logout</button><div className={css.isLogin} >{letter}</div></div>}
            {!userName &&  <button onClick={openLoginForm} className={css.loginButton}>Login</button>}
        </div>
    );
};

export {Header};