import axios from "axios";

const GET_URL = "https://shopaccliqi.azurewebsites.net/api/Users";

export const getUserById = (userId) => {
    const url = `${GET_URL}/${userId}`;
    return axios.get(url);
}
  