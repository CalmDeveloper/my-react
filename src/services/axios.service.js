import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService= axios.create({baseURL});
axiosService.interceptors.request.use((config) => {

    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWIxZTJlMTBlNTU0ZWI2YjU4NGE5ZGE3ZTI5YjAzNyIsInN1YiI6IjYyOTQ5MmQ2MDllZDhmMTI1NDc4Yjc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZVd5vjV7IBhjZAX_sjuDdqNUlriythv5ZIpl0cbPJhU';
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

export {axiosService}