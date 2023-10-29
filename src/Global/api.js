import axios from "axios";

const instance = axios.create({
    baseURL: 'http://placeholder.crossfox.online/AlexFedorko/',
});

export default {
    get: (path, params) => instance.get(path, {params})
};