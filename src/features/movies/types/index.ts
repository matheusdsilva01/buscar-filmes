export * from "./Movie"
export * from "./Credits"
export * from "./Images"
export * from "./Providers"
export * from "./Videos"
export * from "./Requests"

export type FilterOption = "trending" | "top_rated" | "popular"

export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}
