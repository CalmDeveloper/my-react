import {useLocation, useParams} from "react-router-dom";
import {miniPoster} from "../../constants/urls";
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
    }, [id])

    const {details, genresOfOneMovie} = useSelector(state => state.movies)

    const {
        tagline, revenue, budget, title, vote_average,
        release_date, original_language, overview, poster_path
    } = details
    const link = (miniPoster + poster_path)

    return (
        <div className={css.movieInfo}>
            <div className={css.poster}><img src={link}  onError={(e)=>{ if (e.target.src !== {link})
            { e.target.onerror = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"; } }}alt={title}/></div>
            <div className={css.wraper}>
                <h1>{title}</h1>
                <StarRating vote_average={vote_average}/>
                <h2>Genres: <span className={css.color}>{genresOfOneMovie}</span></h2>
                <h2>Release date: <span className={css.color}>{release_date}</span></h2>
                { ({budget}===0) && <h2>Budget: <span className={css.color}>{budget}</span></h2>}
                { ({revenue}===0) &&  <h2>Profit: <span className={css.color}>{revenue}</span></h2>}
                <h2>Original language: <span className={css.color}>{original_language}</span></h2>
                <div className={css.tagline}>{tagline}</div>
                <h1>Description</h1>
                <h2>{overview}</h2>
            </div>
        </div>
    );
};

export {MovieInfo};