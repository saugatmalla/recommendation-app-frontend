import axios from 'axios';

console.log(process.env)
const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {}
})

export default api;