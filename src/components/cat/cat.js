import {useDispatch} from "react-redux";
import {actionsCat} from "../../redux/slices/catSlice";

const Cat = ({cat}) => {
const dispatch= useDispatch()
    return (
        <div>
            {cat.name}--{cat.id}
            <button onClick={()=>dispatch(actionsCat.delCat({id:cat.id}))}>delate</button>
            <button onClick={()=>dispatch(actionsCat.setCatForUpdate({cat}))}>update</button>
        </div>
    );
};
export {Cat};