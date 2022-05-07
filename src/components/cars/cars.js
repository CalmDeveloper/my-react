
import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../car/car";

const Cars = () => {
    const [cars, setCars] = useState([]);
console.log(cars)
    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};