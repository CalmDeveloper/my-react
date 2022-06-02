import css from './MoviesListCard.module.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useLocation, useSearchParams} from "react-router-dom";
import {MoviesCard} from "../MoviesCard/MoviesCard";

const MoviesListCard = () => {

const dispatch = useDispatch()
const {search} = useLocation()
console.log(search)
    const {movies} =  useSelector(state => state.movies)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
dispatch(moviesActions.getAll({page:query.get('page'),}))
        dispatch(moviesActions.getGenres())
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
            <div className={css.navigation}>
                <button onClick={toPrev}>prev</button>
                <button onClick={toNext}>next</button>
            </div>
            <div className={css.movies}>{movies && movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}</div>
        </div>
    );
};

export {MoviesListCard};