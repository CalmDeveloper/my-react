import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";

const moviesService = {

    getAllMovie:(page=1)=> axiosService.get(urls.movie,{params:{page}}),
    getGenres:()=> axiosService.get(urls.genres)
}

export {moviesService};