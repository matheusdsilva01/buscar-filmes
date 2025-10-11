import { api } from "lib/api";
import { IFilm } from "types/Film";

interface IResultResponse {
  results: IFilm[];
  total_pages: number;
  total_results: number;
  page: number;
}

type SearchMoviesProps = {
  query: string;
  page?: number;
};

export function searchMovies({ query, page = 1 }: SearchMoviesProps) {
  return api.get<IResultResponse>("/search/movie", {
    params: { query, page }
  });
}
