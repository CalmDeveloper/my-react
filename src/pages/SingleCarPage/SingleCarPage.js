import {CarDetails, CarForm} from "../../components";

import {useEffect, useState} from "react";

import {useLocation, useParams} from "react-router-dom";
import {carService} from "../../services";

const SingleCarPage = () => {
    const {state} = useLocation()
    const {id} = useParams()
    const [car, setCar] = useState(null)
    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getById(id).then(({data}) => setCar(data))
        }
    }, [])
    return (
        <div>
            <CarForm/>
            {
                car && <CarDetails car={car}/>
            }
        </div>
    );
};
export {SingleCarPage};
