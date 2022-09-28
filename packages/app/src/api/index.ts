import axios from "axios";

export type TApiResponse = {
  message: string;
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
})

axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export const getHello = () => {
  return axiosInstance.get<TApiResponse>('/hello')
}

export const postEcho = (message: string) => {
  return axiosInstance.post<TApiResponse>('/echo', {message})
}
