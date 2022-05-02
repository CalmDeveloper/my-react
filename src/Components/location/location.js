import {Link} from "react-router-dom";
import css from './location.module.css'
import {useDispatch} from "react-redux";
import {locationActions} from "../../redux/slices/locationSlice";


const Location = ({location}) => {
const {id,name,type,dimension,residents} = location
    const dispatch = useDispatch()
    dispatch(locationActions.getCurentLocation({name}))
    return (
        <div className={css.location}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>type: {type}</div>
            <div>dimension: {dimension}</div>
            <Link to={'/characters'} state={residents}>
                <button>Get actors</button>
            </Link>
        </div>
    );
};

export {Location};