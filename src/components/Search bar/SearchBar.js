import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";

const SearchBar = () => {
    const {register, handleSubmit,reset} = useForm();
   const dispatch =  useDispatch()
    const getKeywords = (keywords) => {
        dispatch(moviesActions.getKeywords({keywords}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(getKeywords)}>
               <input type="text" {...register('keywords')} />
                <button>search</button>
            </form>
        </div>
    );
};

export {SearchBar};