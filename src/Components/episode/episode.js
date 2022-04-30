import css from './episode.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeActions} from "../../redux";

const Episode = ({episode:{id, name, air_date, episode, characters}}) => {
   const dispatch =  useDispatch()
    const navigate =  useNavigate()
    const toSingleOpisode = () => {
        dispatch(episodeActions.getCurentEpisode({episodeName:name}))
        navigate(`/characters`,{state:characters})
    }

    return (
        <div className={css.episode} onClick={toSingleOpisode}>
            {/*<div><b>id:</b> <span className={css.text}>{id}</span></div>*/}
            <div><b>name:</b> <span className={css.text}>{name}</span></div>
            <div><b>air_date:</b> <span className={css.text}>{air_date}</span></div>
            <div><b>episode:</b> <span className={css.text}>{episode}</span></div>
        </div>
    );
};

export {Episode};