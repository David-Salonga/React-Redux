import axios from "axios";

const api = axios.create({
    // baseURL: "https://611cc1a7a18e850017decc2f.mockapi.io/",
    baseURL: "http://localhost:8091/",
})

export default api;