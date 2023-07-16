import axios from "axios";

const makeRequest = axios.create({
  baseURL: "http://localhost:8000",
});

makeRequest.interceptors.request.use((config) => {
  if (window.localStorage.getItem("token")) {
    config.headers.Authorization = window.localStorage.getItem("token");
  }
  return config;
});

export default makeRequest;
