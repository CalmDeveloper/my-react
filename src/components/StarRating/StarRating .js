import React, {useEffect, useState} from "react";
import css from './star.css'
export const StarRating = ({vote_average}) => {

    const [rating, setRating] = useState(null);
  useEffect(() => {
      setRating(vote_average)
  },[vote_average])

    const [hover, setHover] = useState(0);
    return (
        <div className="css">
            {[...Array(10)].map((star, index) => {
                index += 1;

                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        style={{backgroundColor:'transparent', border:'none', outline:"none"}}
                        // onClick={() => setRating(index)}
                        // onMouseEnter={() => setHover(index)}
                        // onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

