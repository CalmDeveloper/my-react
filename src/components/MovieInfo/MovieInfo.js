import {useLocation, useParams} from "react-router-dom";
import {miniPoster, noFoundImage} from "../../constants/urls";
import css from './MovieInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {StarRating} from "../StarRating/StarRating ";
import {useEffect} from "react";
import {moviesActions} from "../../redux";





const MovieInfo = () => {
    const {state} = useLocation()
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(moviesActions.getDetails({id}))
        } else {
            const {id} = state
            dispatch(moviesActions.getDetails({id}))
        }
    }, [])

    const {details, genresOfOneMovie} = useSelector(state => state.movies)

    const {
        tagline, revenue, budget, title, vote_average,
        release_date, original_language, overview, poster_path,imdb_id,production_countries, runtime
    } = details
    const objCountry = ()=>{
        if (production_countries){return production_countries.map(value=>value.name)}else {
            return 'unknown'
        }
    }

    const country = objCountry().toString().replace(',', ', ')



    const link = (miniPoster + poster_path)
    const imdbLink = `https://www.imdb.com/title/${imdb_id}/`;
const imdbLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png'

    return (
        <div className={css.movieInfo}>
            <div className={css.poster}><img src={link} onError={(e) => {
                if (e.target.src !== {link}) {
                    e.target.onerror = null;
                    e.target.src = noFoundImage;
                }
            }} alt={title}/></div>
            <div className={css.wraper}>
                <h1>{title}</h1>
                <div className={css.rating}><StarRating vote_average={vote_average}/> <a href={imdbLink}><img src={imdbLogo} alt="imdb logo"/></a></div>
                <div id={css.mediumText}>Genres: <span className={css.color}>{genresOfOneMovie}</span></div>
                {(country) && <div id={css.mediumText}>Сountry: <span className={css.color}>{country}</span></div>}
                <div id={css.mediumText}>Ran time: <span className={css.color}>{runtime} min</span></div>
                <div id={css.mediumText}>Release date: <span className={css.color}>{release_date}</span></div>
                {(budget !== 0) && <div id={css.mediumText}>Budget: <span className={css.color}>{budget}</span></div>}
                {(revenue !== 0) && <div id={css.mediumText}>Profit: <span className={css.color}>{revenue}</span></div>}
                <div id={css.mediumText}>Original language: <span className={css.color}>{original_language}</span></div>
                <div className={css.tagline}>{tagline}</div>

                <div className={css.overview}>{overview}</div>
            </div>
        </div>
    );
};

export {MovieInfo};