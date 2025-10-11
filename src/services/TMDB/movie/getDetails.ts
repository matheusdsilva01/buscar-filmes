import { api } from "lib/api";
import { IFilmDetails } from "types/Film";

export function getMovieDetails(id: string) {
  return api.get<IFilmDetails>(`/movie/${id}`);
}