import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {locationActions} from "../../redux/slices/locationSlice";
import {useSearchParams} from "react-router-dom";
import {Location} from "../location/location";
import css from './locations.module.css'

const Locations = () => {
    const dispatch = useDispatch()
    const [query,setQuery] = useSearchParams({page:'1'});
    const {prev,next,locations} = useSelector(state => state.locations)

    useEffect(() => {
        dispatch(locationActions.getAll({page:query.get('page')}))
    },[query])
    const toPrev = () => {
      let Prevpage = query.get('page')
        Prevpage=+Prevpage-1
        setQuery({page:Prevpage.toString()})
    }
    const toNext = () => {
        let nextPage = query.get('page')
        nextPage =+nextPage+1
        setQuery({page:nextPage.toString()})
    }
    return (
        <div>
            <div className={css.locations}>
                {locations.map(location=> <Location key={location.id} location={location}/>)}
            </div>

            <div style={{display:'flex', position:'absolute',top:'90px',left:'20px'}}>
                <button onClick={toPrev} disabled={!prev}>prev</button>
                <button onClick={toNext} disabled={!next}>next</button>
            </div>
        </div>
    );
};

export {Locations};