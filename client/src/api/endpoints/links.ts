import axios from "../axiosConfig";

export const getUrls = () => axios.get("/");
export const redirect = (id: string) => axios.get(`/shorten/${id}`);
export const postUrl = (data: { url: string, shortCode: string }) => axios.post("/", data);
export const updateUrl = (id: string, data: { url: string }) => axios.put(`${id}`, data);
export const deleteUrl = (id: string) => axios.delete(`${id}`);