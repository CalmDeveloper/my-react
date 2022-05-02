import css from './header.module.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
const Header = () => {
    const {curentEpisode} = useSelector(state =>state.episodes )
    const {curentLocation} = useSelector(state =>state.locations )
    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/episodes'} style={{position:"absolute", top:'20px',left:'20px'}}>Episodes</NavLink>
                <NavLink to={'/characters'} style={{position:"absolute", top:'20px',left:'100px'}}>Characters</NavLink>
                <NavLink to={'/location'} style={{position:"absolute", top:'20px',left:'200px'}}>Locations</NavLink>
            </div>
          <h1>Rick and morty </h1>
            {curentEpisode && <h2 style={{color:'red'}}><span style={{color:'white'}}>Episode:</span> {curentEpisode}</h2>}
            {curentLocation && <h2 style={{color:'red'}}><span style={{color:'white'}}>Location:</span> {curentLocation}</h2>}
        </div>
    );
};

export {Header};
