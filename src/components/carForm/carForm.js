import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();
   const {formErrors}= useSelector(state => state.cars)
const dispatch = useDispatch()
    const submit = async  (newCar) => {
await  dispatch(carActions.create({car:newCar}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>model: <input type="text" {...register('model')}/></label></div>
                {formErrors.model && <span>{formErrors.model[0]}</span>}
                <div><label>price: <input type="text" {...register('price')}/></label></div>
                {formErrors.price && <span>{formErrors.price[0]}</span>}
                <div><label>year: <input type="text" {...register('year')}/></label></div>
                {formErrors.year && <span>{formErrors.year[0]}</span>}
                <button>save</button>
            </form>
        </div>
    );
};

export {CarForm};