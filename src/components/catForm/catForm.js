import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionsCat} from "../../redux";

const CatForm = () => {
    const [name,setName]= useState('')
    const dispatch = useDispatch()
const {catForUpdate} = useSelector(({cat}) => cat)

useEffect(() => {
    if (catForUpdate){
        setName(catForUpdate.name)
    }

},[catForUpdate])

    const save = () => {
        if (catForUpdate){
          dispatch(actionsCat.updateCat({ name, id: catForUpdate.id }))
        }
        else {
            dispatch(actionsCat.addCat({name}));
        }
        setName('');
    }

    return (
        <div>
            <label>cat:
                <input type="text" onChange={(e) => setName(e.target.value)}
                       value={name}/>
                <button onClick={save}>{catForUpdate? 'update' : 'create'}</button>
            </label>

        </div>
    );
};

export {CatForm};