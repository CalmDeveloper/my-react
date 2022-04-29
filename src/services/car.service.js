import {axiosService} from "./service.axios";
import {urls} from "../constants";

const carService = {
   getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`), //delete для видалення
        getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
};

export {carService};