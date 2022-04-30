import {axiosService} from './axios.service'
import {urls} from "../constants/urls";

const episodeService = {
    getAll:(page=1)=> axiosService.get(urls.episode,{params:{page}}),
    // getSingleEpisode:(id)=> axiosService.get(`${urls.episode}/${id}`)
}
export {episodeService};