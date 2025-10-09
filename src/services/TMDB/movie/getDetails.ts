import { api } from "services/api";
import { IFilmDetails } from "types/Film";

export function getMovieDetails(id: string) {
  return api.get<IFilmDetails>(`/movie/${id}`);
}