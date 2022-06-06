import {moviesActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './sortBar.module.css'

const SortBar = () => {
    const {sortValue} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const sortBy = (sortValue) => {
        dispatch(moviesActions.resetKeywords())
        dispatch(moviesActions.addSortValue({sortValue}))
    }

    useEffect(() => {
        if (sortValue==="popularity.desc"){
            document.getElementById('popular_btn').style.color = '#ffaa00'
            document.getElementById('profitable_btn').style.color = 'white'
            document.getElementById('topRatings').style.color = 'white'
        }
        if (sortValue==="revenue.desc"){

            document.getElementById('popular_btn').style.color = 'white'
            document.getElementById('profitable_btn').style.color = '#ffaa00'
            document.getElementById('topRatings').style.color = 'white'
        }
        if (sortValue==="vote_count.desc"){
            document.getElementById('popular_btn').style.color = 'white'
            document.getElementById('profitable_btn').style.color = 'white'
            document.getElementById('topRatings').style.color = '#ffaa00'
        }

    },[sortValue])
    return (
        <div className={css.sortBar}>
            <button onClick={() => sortBy("popularity.desc")} id={"popular_btn"}>Popular</button>
            <button onClick={() => sortBy("revenue.desc")} id={"profitable_btn"}>Top profit</button>
            <button onClick={() => sortBy("vote_count.desc")} id={"topRatings"}>Top ratings</button>
        </div>
    );
};

export {SortBar};