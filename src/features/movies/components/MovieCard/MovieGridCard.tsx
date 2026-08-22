import Image from "next/image";
import Link from "next/link";

import { Star, Calendar, TrendingUp } from "lucide-react";

import { formatMovieMetrics } from "./formatMovieMetrics";
import { MovieGridCardProps } from "./types";

export const MovieGridCard = ({
  movie,
  className = ""
}: MovieGridCardProps) => {
  const { rating, starCount, releaseYear, posterUrl, isHighRated, isPopular } =
    formatMovieMetrics(movie);

  return (
    <Link
      href={`/movie/${movie.id}`}
      className={`group bg-gray-2/50 border-gray-5/50 hover:border-red-9/50 relative block cursor-pointer overflow-hidden rounded-xl border transition-all ${className}`}
    >
      <div className="relative overflow-hidden">
        <Image
          key={`film-${movie.id}`}
          src={posterUrl}
          alt={`Poster do filme: ${movie.title}`}
          blurDataURL="/load.png"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={300}
          height={450}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isHighRated && (
            <div className="flex items-center gap-1 rounded-full bg-yellow-500/90 px-2 py-1 text-xs font-bold text-black backdrop-blur-sm">
              <Star className="size-3 fill-current" />
              {rating}
            </div>
          )}
          {isPopular && (
            <div className="bg-red-9/90 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
              <TrendingUp className="size-3" />
              Em alta
            </div>
          )}
        </div>

        <div className="absolute right-0 bottom-0 left-0 translate-y-2 p-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <div className="space-y-2">
            {releaseYear && (
              <div className="flex items-center gap-1 text-xs text-gray-300">
                <Calendar className="size-3" />
                <span>{releaseYear}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${
                    i < starCount
                      ? "fill-current text-yellow-400"
                      : "text-gray-6"
                  }`}
                />
              ))}
              <span className="ml-1 text-xs text-gray-300">{rating}/10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-gray-12 group-hover:text-red-9 line-clamp-2 text-sm leading-tight font-semibold transition-colors">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="size-3 fill-current text-yellow-400" />
            <span className="text-gray-11 text-xs font-medium">{rating}</span>
          </div>
          {releaseYear && (
            <span className="text-gray-10 text-xs">{releaseYear}</span>
          )}
        </div>
      </div>
    </Link>
  );
};
