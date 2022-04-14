import axios from 'axios';

console.log(import.meta.env)
const api = axios.create({
    baseURL: import.meta.env.REACT_APP_BASE_URL,
    headers: {}
})

export default api;