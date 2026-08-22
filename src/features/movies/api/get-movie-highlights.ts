import { api } from "@/shared/api"

import { FilterOption, Movie, PaginatedResponse } from "../types"

export async function getMovieHighlights(
  filter: FilterOption
): Promise<PaginatedResponse<Movie>> {
  const endpoints = {
    trending: "/trending/movie/week",
    top_rated: "/movie/top_rated",
    popular: "/movie/popular"
  }

  return api.get<PaginatedResponse<Movie>>(endpoints[filter], {
    next: { tags: [filter] }
  })
}
