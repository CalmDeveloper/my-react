import {useCallback, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

import {MoviesCard} from "../MoviesCard/MoviesCard";


import css from './MoviesListCard.module.css'

const MoviesListCard = () => {

const dispatch = useDispatch()
    const {movies,genresArrForSearch,currentPage,total_pages,keywords} =  useSelector(state => state.movies)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (keywords){
            dispatch(moviesActions.searchByKeywords({parametr:keywords,page:query.get('page')}))
        }
        else {
            dispatch(moviesActions.getAll({page:query.get('page'),
                with_genres:genresArrForSearch.toString()}))
        }

    },[query,genresArrForSearch,keywords])


    useCallback(() => {dispatch(moviesActions.getGenres())}, []);


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
                <button onClick={toPrev} disabled={currentPage<=1 && true}>Previous page</button>
                <button onClick={toNext} disabled={currentPage>=total_pages && true}>Next page</button>
            </div>
             <div className={css.movies}>{movies && movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}</div>
        </div>
    );
};

export {MoviesListCard};