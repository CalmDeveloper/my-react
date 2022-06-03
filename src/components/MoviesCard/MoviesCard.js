import {miniPoster} from '../../constants/urls'
import css from './Movie.module.css'
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {StarRatingForAllMovies} from "../StarRatingForAllMovies/StarRatingForAllMovies";
const MoviesCard = ({movie}) => {
    const {title,vote_average,poster_path,id}= movie
    const dispatch = useDispatch()
   const navigate =  useNavigate()
    const movieInfo = () => {
        dispatch(moviesActions.getCurentMovies({title}))
        navigate(`/movie/${id}`,{state:id})
    }
    const link = (miniPoster+poster_path)

    return (
        <div className={css.movie} onClick={movieInfo}>
            <img src={link}   onError={(e)=>{ if (e.target.src !== {link})
            { e.target.onerror = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"; } }} alt={title} />
            <div className={css.wrap}>
                <h3>{title}</h3>
              <StarRatingForAllMovies vote_average={vote_average}/>
            </div>
        </div>
    );
};

export {MoviesCard};