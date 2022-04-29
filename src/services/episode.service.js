import {axiosService} from './axios.service'
import {urls} from "../constants/urls";

const episodeService = {
    getAll:()=> axiosService.get(urls.episode)
}

export {episodeService};