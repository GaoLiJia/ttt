import Vue from 'vue';
import axios from 'axios';
import { getCookies } from '../utils/utils.js';

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:3333';
} else {
    axios.defaults.baseURL = 'http://www.lb717.com';
}
let httpPlugin = {
    install: (Vue) => {
        let axiosCase1 = axios.create();
        let axiosCase2 = axios.create({
            headers: {'Authorization': ''}
        });
        axiosCase2.interceptors.request.use((config) => {
            let token = getCookies('token');
            config.headers.Authorization = token
            return config;
        }, (error) => {
            return Peomise.reject(error);
        })
        Object.defineProperty(Vue.prototype, '$http', {
            value: axiosCase1
        })
        Object.defineProperty(Vue.prototype, '$http_token', {
            value: axiosCase2
        })
    }
}
Vue.use(httpPlugin);