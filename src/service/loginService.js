import axios from "axios";

const API_URL = 'https://shopaccliqi.azurewebsites.net/api/Authens/login';

export const login = async (userData) => {
    return axios.post(API_URL, userData);
}