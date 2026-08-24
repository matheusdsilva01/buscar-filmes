import Image from "next/image";
import Link from "next/link";

import { Star, Calendar } from "lucide-react";

import { formatMovieMetrics } from "./formatMovieMetrics";
import { MovieListCardProps } from "./types";

export const MovieListCard = ({
  movie,
  className = ""
}: MovieListCardProps) => {
  const { rating, starCount, releaseYear, posterUrl } =
    formatMovieMetrics(movie);

  return (
    <div
      className={`bg-gray-2/50 border-gray-5 hover:border-red-9/50 overflow-hidden rounded-md border transition-all ${className}`}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-48 sm:shrink-0">
          <Image
            src={posterUrl}
            width={258}
            height={367}
            alt={`Poster do filme ${movie.title}`}
            className="w-[192px] object-cover md:w-full"
          />
        </div>

        <div className="flex-1 p-6">
          <div className="flex flex-col gap-y-3">
            <div>
              <h2 className="text-gray-12 text-xl font-bold sm:text-2xl">
                <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
              </h2>

              <div className="text-gray-11 mt-2 text-sm">
                {releaseYear && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <p>{releaseYear}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`size-4 ${
                      index < starCount
                        ? "fill-current text-yellow-400"
                        : "text-gray-6"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-12 text-sm font-medium">
                {rating}/10
              </span>
              <span className="text-gray-11 text-xs">
                ({movie.vote_count} votos)
              </span>
            </div>

            <div>
              <p className="text-gray-11 line-clamp-3 leading-relaxed">
                {movie.overview ||
                  "Este filme ainda não possui uma sinopse disponível."}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={`/movie/${movie.id}`}
                className="bg-red-9 hover:bg-red-10 inline-block rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
