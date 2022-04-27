import {useSelector} from "react-redux";
import {Cat} from "../cat/cat";


const Cats = () => {
    const {cats} = useSelector(({cat}) => cat);
    return (
        <div>
            {cats.map((cat) => <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export {Cats};