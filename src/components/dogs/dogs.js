import {useSelector} from "react-redux";
import {Dog} from "../dog/dog";


const Dogs = () => {

    const {dogs} = useSelector(({dog}) =>dog);

    return (
        <div>
            {dogs.map(dog=> <Dog dog={dog} key={dog.id}/> )}

        </div>
    );
};

export {Dogs};