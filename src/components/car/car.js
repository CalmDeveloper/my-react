import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";

const Car = ({car:{id,model,price,year}}) => {
    const dispatch = useDispatch()
    const delate = () =>  {
         dispatch(carActions.delate({id}))
    }

    return (
        <div>
            {id}--{model}--{price}--{year}
           <button onClick={delate}>delate</button>
        </div>
    );
};

export {Car};