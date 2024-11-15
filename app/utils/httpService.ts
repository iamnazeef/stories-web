import axios from "axios";

const DOMAIN = "http://localhost:8000/api"

const httpService = {
  get: (url: string, params?: object) => {
    return axios.get(DOMAIN+url, params)
  }
}

export default httpService;