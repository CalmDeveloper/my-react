import {createRef} from "react";
import {useDispatch} from "react-redux";
import {characterActions} from "../../redux/slices/characterSlice";

const FormSearchByName = () => {
    const name = createRef()
    const dispatch =  useDispatch()
    const searchByName = () => {
      dispatch(characterActions.nameForSearch({name:name.current.value}))
name.current.value=''
    }
    return (
        <div>
            <label>Шукати по імені:<input type="text" ref={name}/>
                <button onClick={searchByName}>Знайти</button>
            </label>
        </div>
    );
};

export {FormSearchByName};