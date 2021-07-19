import axios from 'axios';

const url = "http://localhost:8000/api";

export const ApiService = {
  getService(endpoint) {
    return axios.get(`${url}/${endpoint}`)
  }
}
