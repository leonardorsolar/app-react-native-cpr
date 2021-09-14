import axios from "axios";

const api = axios.create({
    //caminho onde estão as minahs apis
    //baseURL: 'http://192.168.15.3/apiModelo/'
    baseURL: 'http://localhost/apiModelo/'
});

export default api;