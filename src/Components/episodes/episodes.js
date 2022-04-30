import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../../redux";
import {Episode} from "../episode/episode";
// import {useSearchParams} from "react-router-dom";

const Episodes = () => {
const  dispatch  = useDispatch()
    const {episodes} =  useSelector(state => state.episodes)
    console.log(episodes)
    // const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(() => {
        dispatch(episodeActions.getAll())
    },[])

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode} />)}
        </div>
    );
};

export {Episodes};