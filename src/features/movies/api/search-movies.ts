import { api } from "@/shared/api"

import { Movie, PaginatedResponse, SearchMovieParams } from "../types"

export async function searchMovies(
  query: string,
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return api.get<PaginatedResponse<Movie>, SearchMovieParams>("/search/movie", {
    params: { query, page },
    next: { tags: ["search"] }
  })
}
