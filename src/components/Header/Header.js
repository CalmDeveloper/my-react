import css from './header.module.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {Genres} from "../Genres/Genres";

const Header = () => {
    const {curentMovies} = useSelector(state =>state.movies )

    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'} style={{position:"absolute", top:'10px',left:'20px'}}>Movies</NavLink>

            </div>
            <Genres/>
            {!curentMovies && <h1>The world of movies</h1>}
            {curentMovies && <h2 style={{color:'red'}}>
          {curentMovies}</h2>}
        </div>
    );
};

export {Header};