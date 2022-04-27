import {useDispatch} from "react-redux";
import {actionsDog} from "../../redux";

const Dog = ({dog}) => {
   const dispatch =  useDispatch()
    return (
        <div>
            {dog.id}--{dog.name}
            <button onClick={()=>dispatch(actionsDog.delDog({id:dog.id}))}>delate</button>
            <button onClick={()=>dispatch(actionsDog.setDogForUpdate({dog}))}>update</button>
        </div>
    );
};

export {Dog};