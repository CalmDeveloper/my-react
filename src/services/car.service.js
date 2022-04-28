import {axiosService} from "./service.axios";
import {urls} from "../constants";

const carService = {
   getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car)
};

export {carService};