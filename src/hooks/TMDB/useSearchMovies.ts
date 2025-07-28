import { api } from "services/api";
import useSWR, { Fetcher } from "swr";
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

const fetcher: Fetcher<IResultResponse, [string, any]> = ([url, params]) =>
  api.get(url, params);

export function useSearchMovies({ query, page = 1 }: useSearchMoviesProps) {
  return useSWR(
    query ? [`/search/movie`, { params: { query, page } }] : null,
    fetcher,
    {
      keepPreviousData: true
    }
  );
}
