import {urls} from "../constants/urls";
import {axiosService} from "./axios.service";
const locationService={
    getAll:(page=1)=>axiosService.get(urls.location,{params:{page}})
}

export {locationService}