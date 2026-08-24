import { api, TMDBNotFoundError } from "shared/api";

import { MovieDetails } from "../types";

export async function getMovieDetails(
  id: string
): Promise<MovieDetails | null> {
  try {
    return await api.get<MovieDetails>(`/movie/${id}`, {
      next: { tags: [`movie-${id}`] }
    });
  } catch (error) {
    if (error instanceof TMDBNotFoundError) {
      return null;
    }
    throw error;
  }
}

