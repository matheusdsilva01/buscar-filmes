import { api } from "lib/api";
import { IMovie } from "types/Movie";

interface IResultResponse {
  results: IMovie[];
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
