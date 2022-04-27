import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionsDog} from "../../redux";

const DogForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const {dogForUpdate} = useSelector(({dog}) => dog)

    useEffect(() => {
        if (dogForUpdate) {
            setName(dogForUpdate.name)
        }
    }, [dogForUpdate])

    const save = () => {
        if (dogForUpdate) {
dispatch(actionsDog.updateDog({name,id:dogForUpdate.id}))
        } else {
            dispatch(actionsDog.addDog({name}))
        }
        setName('')
    }
    return (
        <div>
            {<label>Dogs:<input type="text" value={name} onChange={(e) => setName(e.target.value)}/></label>}
            <button onClick={save}>{dogForUpdate ? 'update' : 'create'}</button>

        </div>
    );
};

export {DogForm};