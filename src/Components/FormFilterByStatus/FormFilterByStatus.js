import {createRef} from "react";
import {useDispatch} from "react-redux";
import {characterActions} from "../../redux/slices/characterSlice";

const FormFilterByStatus = () => {
   const dispatch =  useDispatch()
    const status = createRef()
    const filterByStatus = () => {
 dispatch(characterActions.statusForSearch({status:status.current.value}))
        status.current.value=''
    }
    return (
        <div>
            <label>Шукати по статусу:
                <input type="text" ref={status}/>
                <button onClick={filterByStatus}>Знайти</button>
            </label>
        </div>
    );
};

export {FormFilterByStatus};