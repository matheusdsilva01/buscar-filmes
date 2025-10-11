import { api } from "lib/api";
import { IFilmsPopular } from "types/Film";

interface ResponseFilmPopular {
  results: IFilmsPopular[];
}

export type FilterOption = "trending" | "top_rated" | "popular";

export const getPopularMovies = async () => {
  return await api.get<ResponseFilmPopular>("/movie/popular", {
    cache: "default",
    next: {
      tags: ["popular"]
    }
  });
};

export const getTrendingWeekMovies = async () => {
  return await api.get<ResponseFilmPopular>("/trending/movie/week", {
    cache: "default",
    next: {
      tags: ["trending"]
    }
  });
};

export const getTopRatedMovies = async () => {
  return await api.get<ResponseFilmPopular>("/movie/top_rated", {
    cache: "default",
    next: {
      tags: ["top_rated"]
    }
  });
};