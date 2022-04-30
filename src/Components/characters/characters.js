import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "../character/character";
import {characterService} from "../../services";
import css from './characters.module.css'

const Characters = () => {
    const {state} = useLocation()

   const [characters,setCharacters] =  useState([])
useEffect(() => {
    if (state){
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))

    }
},[])

    return (
        <div className={css.characters}>
            {characters.map(character => <Character character={character} key={character.id}/>)}
        </div>
    );
};

export {Characters};