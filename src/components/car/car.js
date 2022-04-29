
import {Link} from 'react-router-dom'
import {carActions} from "../../redux/slices/carSlice";
import {useDispatch} from "react-redux";

const Car = ({car}) => {
    const {id, model, price, year} = car

    const dispatch = useDispatch()
    const update = () => {
        dispatch(carActions.setCarForUpdate({car}))
    }
    return (
        <div style={{display:'flex', marginBottom:'5px'}} >
            <div style={{width:'240px'}}>{id}--{model}--{price}--{year}</div>
            <button onClick={update}>update</button>
            <Link style={{marginLeft:'15px'}} to={id.toString()} state={car}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export {Car};