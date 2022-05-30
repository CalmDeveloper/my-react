import css from './MoviesListCard.module.css'
import {useEffect} from "react";
import {api_key} from "../../constants/urls";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {MoviesCard} from "../MoviesCard/MoviesCard";

const MoviesListCard = () => {


const dispatch = useDispatch()

    const {movies} =  useSelector(state => state.movies)
    const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(() => {
dispatch(moviesActions.getAll({api_key,page:query.get('page')}))

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
            <div style={{display:'flex', position:'absolute',top:'90px',left:'20px'}}>
                <button onClick={toPrev}>prev</button>
                <button onClick={toNext}>next</button>
            </div>
            <div className={css.movies}>{movies && movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}</div>
        </div>
    );
};

export {MoviesListCard};