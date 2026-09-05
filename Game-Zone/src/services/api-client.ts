import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4f71d1dee5284b379f585df348373f7c'
    }
})