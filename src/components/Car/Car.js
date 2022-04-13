import btn from "./btn.module.css"
import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setDeletedCarId}) => {
    const {id, model, price, year} = car
    const updateCar = () => {
        setCarForUpdate(car);
        delCar(id);
    }

    const delCar = async (id) => {
        await carService.deleteById(id)
        setDeletedCarId(id)
    }
    return (
        <div>
            <hr/>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>

            <div className={btn.btn}>
                <button onClick={() => updateCar()}>Update</button>
                <button onClick={() => delCar(id)}>delate</button>

            </div>
        </div>
    );
};

export {Car};