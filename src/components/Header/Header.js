import css from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


const Header = () => {
    const {curentMovies} = useSelector(state =>state.movies )
const  dispatch = useDispatch()
    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'} style={{position:"absolute", top:'10px',left:'20px'}}
                         onClick={()=>dispatch()}>Movies</NavLink>
            </div>
            {!curentMovies && <h1>The world of movies</h1>}
            {curentMovies && <h2 style={{color:'red'}}>
          {curentMovies}</h2>}
        </div>
    );
};

export {Header};