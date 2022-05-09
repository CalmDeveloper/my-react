import {useDispatch} from "react-redux";
import {carActions} from "../../redux";


const Car = ({car}) => {
    const {id,model,price,year} = car
    const dispatch = useDispatch()
    const delate = () =>  {
        dispatch(carActions.delate({id}))
    }
    const update =  () =>  {
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

export {Car};