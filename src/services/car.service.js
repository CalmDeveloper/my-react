import {axiosService} from "./axios.service";
import {urls} from "../constants/links";



const carService= {
    getAll: () => axiosService.get(urls.cars),
    getById: (id)=> axiosService.get(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars,car),
    updateById:(id)=> axiosService.put(`${urls.cars}/${id}`),
    deleteById: (id)=> axiosService.delete(`${urls.cars}/${id}`)
}
export {carService};

// CRUD metods
// create
// read
// update
// delate