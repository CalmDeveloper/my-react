import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";

const moviesService = {

    getAllMovie:(page=1,with_genres)=>
        axiosService.get(urls.movie,{params:{page,with_genres}}),
    getGenres:()=> axiosService.get(urls.genres),
    details:(id)=> axiosService.get(`${urls.details}/${id}`),
    searchByKeywords:(parametr)=>
        axiosService.get(urls.keywords,{params: {query:parametr}})
}


export {moviesService};