import axios from "axios";
import baseURL from "../constants/links";

const axiosService = axios.create({baseURL:baseURL})
export {axiosService};
