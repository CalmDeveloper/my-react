import {useDispatch} from "react-redux";
import {actionsCat} from "../../redux/slices/catSlice";

const Cat = ({cat}) => {
const dispatch= useDispatch()
    return (
        <div>
            {cat.name}
            <button onClick={()=>dispatch(actionsCat.delCat({id:cat.id}))}>delate</button>
        </div>
    );
};
export {Cat};