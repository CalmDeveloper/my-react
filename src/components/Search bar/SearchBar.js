import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";

import  css from './searchBar.module.css'

const SearchBar = () => {
    const {register, handleSubmit,reset,formState: {errors}} = useForm();
   const dispatch =  useDispatch()
    const getKeywords = (keywords) => {
        dispatch(moviesActions.getKeywords({keywords}))
        reset()
    }

    return (
        <div className={css.searchBar}>
            <form onSubmit={handleSubmit(getKeywords)}>
               <input type="text" {...register('keywords',
                   {required:true, maxLength:20,minLength:2})} placeholder={'name'} />
                <button>Search</button>
                {errors.keywords && <div style={{color: "red"}}>Enter the word 2-20 letters!</div>}
            </form>
        </div>
    );
};

export {SearchBar};