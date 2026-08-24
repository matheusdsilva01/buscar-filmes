export interface SearchMovieParams {
  query: string
  page?: number
  include_adult?: boolean
  language?: string
  primary_release_year?: string
  region?: string
  year?: string
}

export interface GetImagesParams {
  language?: string
  include_image_language?: string
}
