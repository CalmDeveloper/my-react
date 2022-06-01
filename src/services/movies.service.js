import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";

const moviesService = {

    getAllMovie:(page=1,...arg)=> axiosService.get(urls.movie,{params:{page,...arg}}),
    getGenres:()=> axiosService.get(urls.genres),
    details:(id)=> axiosService.get(`${urls.details}/${id}`),
}


export {moviesService};