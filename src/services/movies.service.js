import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";

const moviesService = {

    getAllMovie:(api_key,page=1)=> axiosService.get(urls.movie,{params:{api_key,page}})
}

export {moviesService};