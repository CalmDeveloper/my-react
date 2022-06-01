import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";

const moviesService = {

    getAllMovie:(page=1)=> axiosService.get(urls.movie,{params:{page}}),
    getGenres:()=> axiosService.get(urls.genres),
    details:(id)=> axiosService.get(`${urls.details}/${id}`),
getImages:(id)=> axiosService.get(`${urls.imagesColaction}/${id}/images`)
}


export {moviesService};