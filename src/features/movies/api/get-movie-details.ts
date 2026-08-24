import { api } from "shared/api";

import { MovieDetails } from "../types";

export async function getMovieDetails(id: string): Promise<MovieDetails> {
  return api.get<MovieDetails>(`/movie/${id}`, {
    next: { tags: [`movie-${id}`] }
  });
}
