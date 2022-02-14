import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org",
    params: { 'api_key': '0caef4704a61b607b5b3b22d56a0056b', 'language': 'pt-BR' },
});
export default instance;