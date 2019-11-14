import axios from "axios";

const API_BASE_URL = "http://localhost:8086/";
const ACCESS_TOKEN = "accessToken";

export const remote = () => {
  let instance = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" }
  });
  let token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    instance.defaults.headers.Authorization = "Bearer " + token;
  }
  return instance;
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = accessToken =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);
