import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";
import {useNavigate} from "react-router-dom";

const CarDetails = ({car}) => {
    const {id,model,price,year} = car
    const dispatch = useDispatch()
   const navigate =  useNavigate()
    const delate = () =>  {
        dispatch(carActions.delate({id}))
        navigate('/cars');
    }

    const update = () => {
        dispatch(carActions.setCarForUpdate({car}))
    }

    return (
        <div>
            {id}--{model}--{price}--{year}
            <button onClick={delate}>delate</button>
            <button onClick={update}>update</button>
        </div>
    );
};

export {CarDetails};