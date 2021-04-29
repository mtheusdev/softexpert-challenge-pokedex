import Axios from 'axios';
const { URL_API_POKEMON } = process.env;

const Api = Axios.create({
    baseURL: URL_API_POKEMON,
    timeout: 20000
});

export default Api;