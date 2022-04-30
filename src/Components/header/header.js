import css from './header.module.css'
import {useSelector} from "react-redux";
const Header = () => {
    const {curentEpisode} = useSelector(state =>state.episodes )
    return (
        <div className={css.header}>
          <h1>Rick and morty </h1>
            {curentEpisode && <h2 style={{color:'red'}}><span style={{color:'white'}}>Episode:</span> {curentEpisode}</h2>}
        </div>
    );
};

export {Header};
