import axios from 'axios';

export const key = "c5c79ae7f0678257d0c1cd41e240fadaa949ba5d"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;