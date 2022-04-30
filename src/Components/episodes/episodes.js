import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../../redux";
import {Episode} from "../episode/episode";
import css from './episodes.module.css'
import {useSearchParams} from "react-router-dom";


const Episodes = () => {
const  dispatch  = useDispatch()
    const {episodes,prev,next} =  useSelector(state => state.episodes)

    const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(() => {
        dispatch(episodeActions.getAll({page:query.get('page')}))
    },[query])

const toPrev = () => {
    let prevPage =  query.get('page');
    prevPage=+prevPage-1
    setQuery({page: prevPage.toString()})

}
    const toNext = () => {
        const nextPage =  +query.get('page')+1;
        setQuery({page: `${nextPage}`})
    }


    return (
        <div>
            <div className={css.episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode} />)}
            </div>

            <div style={{display:'flex', marginTop:'15px', position:'absolute',top:'40px',left:'20px'}}>
                <button onClick={toPrev} disabled={!prev}>prev</button>
                <button onClick={toNext} disabled={!next}>next</button>
            </div>
        </div>

    );
};

export {Episodes};