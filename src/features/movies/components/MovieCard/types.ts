import { Movie } from "../../types/Movie";

export interface MovieMetrics {
  rating: number;
  starCount: number;
  releaseYear: number | null;
  posterUrl: string;
  isHighRated: boolean;
  isPopular: boolean;
}

export interface MovieGridCardProps {
  movie: Movie;
  className?: string;
}

export interface MovieListCardProps {
  movie: Movie;
  className?: string;
}
