import axios from "axios";

const BASE_URL = "http://localhost:5173/api/v1";

const axiosinstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;