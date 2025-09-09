import axios from "axios";

const API = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 10000
});

export default API