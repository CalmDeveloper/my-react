import css from './header.module.css'
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {moviesActions} from "../../redux";


const Header = () => {

   const  dispatch = useDispatch()
    const resetAll = () => {
      dispatch(moviesActions.resetKeywords())
        dispatch(moviesActions.resetGenresArrForSearch())

    }
    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'} style={{position:"absolute", top:'10px',left:'20px'}} onClick={()=>resetAll()}>Movies</NavLink>
            </div>
                 <h1>The world of movies</h1>

        </div>
    );
};

export {Header};