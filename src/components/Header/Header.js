import css from './header.module.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
const Header = () => {
    const {curentMovies} = useSelector(state =>state.movies )

    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'} style={{position:"absolute", top:'20px',left:'20px'}}>Movies</NavLink>

            </div>
            <h1>Movies Info</h1>
            {curentMovies && <h2 style={{color:'red'}}><span style={{color:'white'}}>Episode:</span> {curentMovies}</h2>}

        </div>
    );
};

export {Header};