import {axiosService} from './axios.service'
import {urls} from "../constants/urls";

const characterService = {
    getByCharacterList:(characters)=>{
        const ids = characters.map(item=>item.split('/').slice(-1)[0]).join(',');
        return axiosService.get(`${urls.character}/${ids}`)
    },
    getAll:(page=1)=> axiosService.get(urls.character,{params:page})
}

export {
    characterService
}