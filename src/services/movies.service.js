import {axiosService} from "./axios.service";

import {urls} from "../constants";

const moviesService = {

    getAllMovie: (page = 1, with_genres,sort_by) =>
        axiosService.get(urls.movie, {params: {page, with_genres,sort_by}}),

    getGenres: () => axiosService.get(urls.genres),
    details: (id) => axiosService.get(`${urls.details}/${id}`),
    searchByKeywords: (parametr, page) =>
        axiosService.get(urls.keywords, {params: {query: parametr, page}})
}

export {moviesService};