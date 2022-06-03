import {miniPoster, noFoundImage} from '../../constants/urls'
import css from './Movie.module.css'


import {useNavigate} from "react-router-dom";
import {StarRatingForAllMovies} from "../StarRatingForAllMovies/StarRatingForAllMovies";
const MoviesCard = ({movie}) => {
    const {title,vote_average,poster_path,id}= movie

   const navigate =  useNavigate()
    const movieInfo = () => {
        navigate(`/movie/${id}`,{state:id})
    }
    const link = (miniPoster+poster_path)

    return (
        <div className={css.movie} onClick={movieInfo}>
            <img src={link}   onError={(e)=>{ if (e.target.src !== {link})
            { e.target.onerror = null; e.target.src=noFoundImage; } }} alt={title} />
            <div className={css.wrap}>
                <h3>{title}</h3>
              <StarRatingForAllMovies vote_average={vote_average}/>
            </div>
        </div>
    );
};

export {MoviesCard};