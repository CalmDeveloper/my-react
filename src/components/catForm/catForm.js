import {useState} from "react";
import {useDispatch} from "react-redux";
import {actionsCat} from "../../redux/slices/catSlice";

const CatForm = () => {
    const [name,setName]= useState('')
    const dispatch = useDispatch()

    const save = () => {
        dispatch(actionsCat.addCat({name}));
        setName('');
    }
    console.log(name)
    return (
        <div>
            <label>cat:
                <input type="text" onChange={(e) => setName(e.target.value)}
                       value={name}/>
                <button onClick={save}>save</button>
            </label>

        </div>
    );
};

export {CatForm};