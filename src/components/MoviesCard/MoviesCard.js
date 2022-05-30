import {miniPoster} from '../../constants/urls'
import css from './Movie.module.css'
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";
const MoviesCard = ({movie}) => {
    const {title,backdrop_path,vote_average}= movie
const dispatch = useDispatch()
   const navigate =  useNavigate()
    const movieInfo = () => {
        dispatch(moviesActions.getCurentMovies({title}))
        navigate(`/movie`,{state:movie})
    }
    const link = (miniPoster+backdrop_path)

    return (
        <div className={css.movie} onClick={movieInfo}>
            <img src={link} alt={title} width="270" height="100%"/>
            <h3>{title}</h3>
        </div>
    );
};

export {MoviesCard};