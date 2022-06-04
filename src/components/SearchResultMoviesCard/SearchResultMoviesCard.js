import {useNavigate} from "react-router-dom";
import {moviesService} from "../../services";
import {miniPoster, noFoundImage} from "../../constants";
import {useEffect, useState} from "react";

import {StarRatingForAllMovies} from "../StarRatingForAllMovies/StarRatingForAllMovies";
import css from "./Movie.module.css";

const SearchResultMoviesCard = ({movie}) => {
    const {id,name}= movie
    const [details,setDetails] = useState({})
useEffect(() => {
    moviesService.details(id).then(({data}) => setDetails(data))
},[])

    const {vote_average,poster_path} = details
    const link = (miniPoster+poster_path)

    const navigate =  useNavigate()
    const movieInfo = () => {
        navigate(`/movie/${id}`,{state:id})
    }

    return (
            <div className={css.movie} onClick={movieInfo}>
                <img src={link}  onError={(e)=>{ if (e.target.src !== {poster_path})
                { e.target.onerror = null; e.target.src=noFoundImage; } }} alt="No found image!" />

                <div className={css.wrap}>
                    <h3>{name}</h3>
                    <StarRatingForAllMovies vote_average={vote_average}/>
                </div>
            </div>
    );

};

export {SearchResultMoviesCard};




