import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_TMDB_API_URL;
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const api = axios.create({
  baseURL: baseURL,
  params: { api_key: apiKey, language: "pt-BR" }
});

export default api;
