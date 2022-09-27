import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
})

axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export const getSlowResponse = () => {
  return axiosInstance.get('/')
}
