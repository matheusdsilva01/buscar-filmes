import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "0caef4704a61b607b5b3b22d56a0056b", language: "pt-BR" }
});

export default api;
