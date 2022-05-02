import {useLocation,useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "../character/character";
import {characterService} from "../../services";
import css from './characters.module.css'
import {useSelector} from "react-redux";


const Characters = () => {
    const {state} = useLocation()
    const [query, setQuery] = useSearchParams({page: '1'});
   const [characters,setCharacters] =  useState([])
const {name,status} = useSelector(state => state.characters)


useEffect(() => {
    if(name){
        setQuery({name: name.toString()})
        characterService.getAllByName({name: query.get('name')}).then(({data}) =>
            setCharacters(data.results))
    }
    else if(status){
        characterService.getByStatus({status, page: query.get('page')}).then(({data}) =>
            setCharacters(data.results))

    }
    else if (state){
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
    }
    else
    {
        characterService.getAll({page: query.get('page')}).then(({data}) =>
            setCharacters(data.results))
    }
},[query,status,name])

    const toPrev = () => {
       if (status){
           const nextPage =  +query.get('page')-1;
           setQuery({status: status.toString(),page: `${nextPage}`})
       }
       else {
           const nextPage =  +query.get('page')-1;
           setQuery({page: `${nextPage}`})
       }


    }
    const toNext = () => {
       if (status){
           const nextPage =  +query.get('page')+1;
           setQuery({status: status.toString(),page: `${nextPage}`})
       }else {
           const nextPage =  +query.get('page')+1;
           setQuery({page: `${nextPage}`})
       }

    }


    return (
        <div>


            <div className={css.characters}>
                { characters.map(character => <Character character={character} key={character.id}/>)}

            </div>

            <div style={{display:'flex', position:'absolute',top:'90px',left:'20px'}}>
                <button onClick={toPrev} disabled={state || name}>prev</button>
                <button onClick={toNext} disabled={state || name}>next</button>
            </div>
        </div>

    );
};

export {Characters};