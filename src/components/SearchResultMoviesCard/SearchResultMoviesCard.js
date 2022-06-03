import {useNavigate} from "react-router-dom";
import {moviesService} from "../../services/movies.service";
import {miniPoster} from "../../constants/urls";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import css from "./Movie.module.css";
import {StarRatingForAllMovies} from "../StarRatingForAllMovies/StarRatingForAllMovies";

const SearchResultMoviesCard = ({movie}) => {
    const {id,name}= movie
    const [details,setDetails] = useState({})
useEffect(() => {
    moviesService.details(id).then(({data}) => setDetails(data))
},[])
    const {title,vote_average,poster_path} = details
    const link = (miniPoster+poster_path)
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const movieInfo = () => {
        dispatch(moviesActions.getCurentMovies({title}))
        navigate(`/movie/${id}`,{state:id})
    }
    return (
            <div className={css.movie} onClick={movieInfo}>
                <img src={link}   onError={(e)=>{ if (e.target.src !== {link})
                { e.target.onerror = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"; } }} alt="No found image!" />
                <div className={css.wrap}>
                    <h3>{name}</h3>
                    <StarRatingForAllMovies vote_average={vote_average}/>
                </div>
            </div>
    );

};

export {SearchResultMoviesCard};




