import {useLocation,useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "../character/character";
import {characterService} from "../../services";
import css from './characters.module.css'



const Characters = () => {
    const {state} = useLocation()
    const [query, setQuery] = useSearchParams({page: '1'});
   const [characters,setCharacters] =  useState([])

useEffect(() => {
    if (state){
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
    }
    else
    {
        characterService.getAll({page: query.get('page')}).then(({data}) =>
            setCharacters(data.results))

    }
},[query])

    const toPrev = () => {
        let prevPage =  query.get('page');
        prevPage=+prevPage-1
        setQuery({page: prevPage.toString()})

    }
    const toNext = () => {
        const nextPage =  +query.get('page')+1;
        setQuery({page: `${nextPage}`})
    }


    return (
        <div>
            <div className={css.characters}>
                {characters.map(character => <Character character={character} key={character.id}/>)}
            </div>

            <div style={{display:'flex', position:'absolute',top:'90px',left:'20px'}}>
                <button onClick={toPrev} disabled={state}>prev</button>
                <button onClick={toNext} disabled={state}>next</button>
            </div>
        </div>

    );
};

export {Characters};