import { api } from "services/api";
import { IFilm } from "types/Film";

interface IResultResponse {
  results: IFilm[];
  total_pages: number;
  total_results: number;
  page: number;
}

type useSearchMoviesProps = {
  query: string;
  page?: number;
};

export function searchMovies({ query, page = 1 }: useSearchMoviesProps) {
  return api.get<IResultResponse>("/search/movie", {
    params: { query, page }
  });
}
