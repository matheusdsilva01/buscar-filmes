import { api } from "lib/api";
import { IMovieDetails } from "types/Movie";

export function getMovieDetails(id: string) {
  return api.get<IMovieDetails>(`/movie/${id}`);
}