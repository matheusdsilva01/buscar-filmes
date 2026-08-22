import Image from "next/image"
import Link from "next/link"

import { Star, Calendar } from "lucide-react"

import { formatMovieMetrics } from "./formatMovieMetrics"
import { MovieListCardProps } from "./types"

export const MovieListCard = ({
  movie,
  className = ""
}: MovieListCardProps) => {
  const { rating, starCount, releaseYear, posterUrl } =
    formatMovieMetrics(movie)

  return (
    <div
      className={`overflow-hidden rounded-md border border-gray-5 bg-gray-2/50 transition-all hover:border-red-9/50 ${className}`}
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
              <h2 className="text-xl font-bold text-gray-12 sm:text-2xl">
                <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
              </h2>

              <div className="mt-2 text-sm text-gray-11">
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
              <span className="text-sm font-medium text-gray-12">
                {rating}/10
              </span>
              <span className="text-xs text-gray-11">
                ({movie.vote_count} votos)
              </span>
            </div>

            <div>
              <p className="line-clamp-3 leading-relaxed text-gray-11">
                {movie.overview ||
                  "Este filme ainda não possui uma sinopse disponível."}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={`/movie/${movie.id}`}
                className="inline-block rounded-lg bg-red-9 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-10"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
