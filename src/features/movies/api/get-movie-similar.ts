import { api, TMDBNotFoundError } from "shared/api";

import { Movie, PaginatedResponse } from "../types";

export async function getMovieSimilar(
  id: string
): Promise<PaginatedResponse<Movie>> {
  try {
    return await api.get<PaginatedResponse<Movie>>(`/movie/${id}/similar`);
  } catch (error) {
    if (error instanceof TMDBNotFoundError) {
      return { page: 1, results: [], total_pages: 0, total_results: 0 };
    }
    throw error;
  }
}

