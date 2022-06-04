import React, {useEffect, useState} from "react";

import css from './star.css'

export const StarRatingForAllMovies = ({vote_average}) => {

    const [rating, setRating] = useState(null);
    useEffect(() => {
        setRating(vote_average)
    },[vote_average])

    return (
        <div className="css">
            {[...Array(10)].map((star, index) => {
                index += 1;

                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (rating) ? "on" : "off"}
                        style={{backgroundColor:'transparent', border:'none',
                            outline:"none",cursor:"pointer",padding:0, position:"relative", bottom:'5px'}}>

                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};
