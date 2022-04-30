
import css from './character.module.css'
const Character = ({character}) => {
 const {id,name,status,species,gender,image} = character

    return (
        <div className={css.character}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>statuse: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}  width="150"/>
            
        </div>
    );
};

export {Character};