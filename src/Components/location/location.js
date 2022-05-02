import {Link, useNavigate} from "react-router-dom";
import css from './location.module.css'
import {useDispatch} from "react-redux";
import {locationActions} from "../../redux/slices/locationSlice";
import {episodeActions} from "../../redux";


const Location = ({location}) => {
const {id,name,type,dimension,residents} = location
    const dispatch = useDispatch()
const navigate = useNavigate()
    const toCharacters = () => {
        dispatch(episodeActions.resetCurentEpisode())
        dispatch(locationActions.getCurentLocation({name}))
      navigate('/characters', {state:residents})
    }
    return (
        <div className={css.location}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>type: {type}</div>
            <div>dimension: {dimension}</div>
                <button onClick={toCharacters}>Get actors</button>
        </div>
    );
};

export {Location};