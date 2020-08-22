import axios from 'axios';
import { DASHBOARD_API_BASE_URL } from '../constants';

const dashboardAxios = axios.create({
    baseURL: DASHBOARD_API_BASE_URL,
    responseType: 'json',
});

export default dashboardAxios;
