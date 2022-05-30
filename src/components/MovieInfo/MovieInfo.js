import {useLocation} from "react-router-dom";
import {miniPoster,api_key} from "../../constants/urls";
import {moviesService} from "../../services/movies.service";
import {useEffect} from "react";

const MovieInfo = () => {
   const {state} =  useLocation()
    const   {adult,backdrop_path,genre_ids,id,original_language,
        overview,poster_path,release_date,title,vote_average} = state
    const link = (miniPoster+backdrop_path)

    return (
        <div>  <div>
            <img src={link} alt={title}/>
        </div>
            <div>
                <h2>{title} {release_date}</h2>
                <h4>{overview}w</h4>
            </div>

        </div>

    );
};

export {MovieInfo};