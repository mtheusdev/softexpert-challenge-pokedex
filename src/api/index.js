import axios from 'axios';
/**
 * Must create and exports an instance of axios
 * @param baseUrl
 * @param timeout
 * @exports api
 */
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 20000,
});

export default api;
