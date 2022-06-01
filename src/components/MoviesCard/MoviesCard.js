import {miniPoster} from '../../constants/urls'
import css from './Movie.module.css'
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {StarRatingForAllMovies} from "../StarRatingForAllMovies/StarRatingForAllMovies";
const MoviesCard = ({movie}) => {
    const {title,backdrop_path,vote_average,poster_path}= movie
    const dispatch = useDispatch()
   const navigate =  useNavigate()
    const movieInfo = () => {
        dispatch(moviesActions.getCurentMovies({title}))
        navigate(`/movie`,{state:movie})
    }
    const link = (miniPoster+poster_path)

    return (
        <div className={css.movie} onClick={movieInfo}>
            <img src={link} alt={title}/>
            <div className={css.wrap}>
                <h3>{title}</h3>
              <StarRatingForAllMovies vote_average={vote_average}/>
            </div>
        </div>
    );
};

export {MoviesCard};