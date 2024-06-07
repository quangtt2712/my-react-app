import axios from "axios";
const API_URL = 'https://shopaccliqi.azurewebsites.net/api/Authens';


const register = (regisData) => {
    console.log(regisData);
    return axios.post(API_URL, regisData);
  }
  
  export default register;