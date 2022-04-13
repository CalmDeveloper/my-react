import btn from "./btn.module.css"
import {carService} from "../../services";
const Car = ({car,setCarForUpdate,setDeletedCarId}) => {
const {id,model,price,year}=car


    return (
        <div>
            <hr/>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>

<div className={btn.btn}>
    <button onClick={() => {setCarForUpdate(car)}}>Update</button>
    <button>delate</button>
</div>



        </div>
    );
};

export {Car};