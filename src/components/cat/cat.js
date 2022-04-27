import {useDispatch} from "react-redux";
import {actionsCat} from "../../redux";

const Cat = ({cat}) => {
const dispatch= useDispatch()
    return (
        <div>
            {cat.id}--{cat.name}
            <button onClick={()=>dispatch(actionsCat.delCat({id:cat.id}))}>delate</button>
            <button onClick={()=>dispatch(actionsCat.setCatForUpdate({cat}))}>update</button>
        </div>
    );
};
export {Cat};