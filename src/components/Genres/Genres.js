import css from './Genres.module.css'
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {moviesActions} from "../../redux";
import {SearchBar} from "../Search bar/SearchBar";

const Genres = () => {
    const {register, handleSubmit} = useForm();
const dispatch = useDispatch()

const getGenres = (arrOfGenrs) => {
    dispatch(moviesActions.genresForSearch({arrOfGenrs}))
}
    return (
        <div className={css.genres}>
            <div className={css.genresBar}>
                <ul>
                    <h3 className={css.genresBarTopic}>Select genres</h3>
                    <form onSubmit={handleSubmit(getGenres)}>
                        <li><label>Action: <input type="checkbox" {...register('arrOfGenrs')} value={28}/></label></li>
                        <li><label>Adventure: <input type="checkbox" {...register('arrOfGenrs')} value={12}/></label></li>
                        <li><label>Animation: <input type="checkbox" {...register('arrOfGenrs')} value={16}/></label></li>
                        <li><label>Comedy: <input type="checkbox" {...register('arrOfGenrs')} value={35}/></label></li>
                        <li><label>Crime: <input type="checkbox" {...register('arrOfGenrs')} value={80}/></label></li>
                        <li><label>Documentary: <input type="checkbox" {...register('arrOfGenrs')} value={99}/></label></li>
                        <li><label>Drama: <input type="checkbox" {...register('arrOfGenrs')} value={18}/></label></li>
                        <li><label>Family: <input type="checkbox" {...register('arrOfGenrs')} value={10751}/></label></li>
                        <li><label>Fantasy: <input type="checkbox" {...register('arrOfGenrs')} value={14}/></label></li>
                        <li><label>History: <input type="checkbox" {...register('arrOfGenrs')} value={36}/></label></li>
                        <li><label>Horror: <input type="checkbox" {...register('arrOfGenrs')} value={27}/></label></li>
                        <li><label>Music: <input type="checkbox" {...register('arrOfGenrs')} value={10402}/></label></li>
                        <li><label>Mystery: <input type="checkbox" {...register('arrOfGenrs')} value={9648}/></label></li>
                        <li><label>Romance: <input type="checkbox" {...register('arrOfGenrs')} value={10749}/></label></li>
                        <li><label>Science Fiction: <input type="checkbox" {...register('arrOfGenrs')} value={878}/></label></li>
                        <li><label>TV Movie': <input type="checkbox" {...register('arrOfGenrs')} value={10770}/></label></li>
                        <li><label>Thriller: <input type="checkbox" {...register('arrOfGenrs')} value={53}/></label></li>
                        <li><label>War: <input type="checkbox" {...register('arrOfGenrs')} value={10752}/></label></li>
                        <li><label>Western: <input type="checkbox" {...register('arrOfGenrs')} value={37}/></label></li>
                        <button>Confirm genres</button>
                    </form>
                </ul>
            </div>
            <SearchBar/>
        </div>
    );
};

export {Genres};
