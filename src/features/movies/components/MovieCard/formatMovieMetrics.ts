import { assetResolver } from "@/shared/utils/AssetResolver"

import { Movie } from "../../types/Movie"
import { MovieMetrics } from "./types"

export function formatMovieMetrics(movie: Movie): MovieMetrics {
  const rating = Number(movie.vote_average?.toFixed(1)) || 0

  return {
    rating,
    starCount: Math.round(rating / 2),
    releaseYear: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : null,
    posterUrl: assetResolver.getMovieImage(movie.poster_path, "POSTER_MD"),
    isHighRated: rating >= 8.0,
    isPopular: Boolean(movie.popularity && movie.popularity > 100)
  }
}
