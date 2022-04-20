import {axiosService} from './axios.service'
import {urls} from "../constants";

const postService={
    getAll:()=> axiosService.get(urls.posts),
    getById:(id)=> axiosService.get(`${urls.posts}/${id}`),
    getByUserId:(id)=> axiosService.get(`${urls.users}/${id}/posts`),
    getAllwithFilterPage:(page, _limit=10)=> axiosService.get(urls.posts,{
params: {
    _start: (page - 1) * _limit,
    _limit
}
    })
}

export {postService};
