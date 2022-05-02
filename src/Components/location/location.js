import {Link} from "react-router-dom";
import css from './location.module.css'

const Location = ({location}) => {
const {id,name,type,dimension,residents} = location
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