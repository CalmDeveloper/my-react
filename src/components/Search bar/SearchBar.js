import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import  css from './searchBar.module.css'
const SearchBar = () => {
    const {register, handleSubmit,reset} = useForm();
   const dispatch =  useDispatch()
    const getKeywords = (keywords) => {
        dispatch(moviesActions.getKeywords({keywords}))
        reset()
    }

    return (
        <div className={css.searchBar}>
            <form onSubmit={handleSubmit(getKeywords)}>
               <input type="text" {...register('keywords')}placeholder={'name'}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export {SearchBar};