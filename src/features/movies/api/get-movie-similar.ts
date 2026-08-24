import { api } from "shared/api";

import { Movie, PaginatedResponse } from "../types";

export async function getMovieSimilar(
  id: string
): Promise<PaginatedResponse<Movie>> {
  try {
    return await api.get<PaginatedResponse<Movie>>(`/movie/${id}/similar`);
  } catch (error) {
    console.warn(`Failed to fetch similar movies for ${id}:`, error);
    return { page: 1, results: [], total_pages: 0, total_results: 0 };
  }
}
