import {axiosService} from './axios.service'
import {urls} from "../constants/urls";

const episodeService = {
    getAll:(page=1)=> axiosService.get(urls.episode,{params:{page}}),
    getByEpisodesList:(episodes)=>{
        const ids = episodes.map(item=>item.split('/').slice(-1)[0]).join(',');
        return axiosService.get(`${urls.episode}/${ids}`)
    }
}
export {episodeService};