import { api } from "services/api";

export function getMovieProviders(id: string) {
  return api.get<any>(`/movie/${id}/watch/providers`);
}

export function getMovieVideos(id: string) {
  return api.get<any>(`/movie/${id}/videos`);
}