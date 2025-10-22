"use client";
import Image from "next/image";
import Link from "next/link";

import { Star, Calendar } from "lucide-react";
import { IMovie } from "types/Movie";

interface MovieResultProps {
  movie: IMovie;
}

export const MovieResult = ({ movie }: MovieResultProps) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "/icons/imgError.svg";
  const voteAverage = Number(movie.vote_average?.toFixed(1) || 0);
  const voteStars = Math.round(voteAverage);
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;

  return (
    <div
      className="bg-gray-2/50 border border-gray-5 rounded-md overflow-hidden 
                    hover:border-red-9/50 transition-all"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-48">
          <Image
            src={posterUrl}
            width={258}
            height={367}
            alt={`Poster do filme ${movie.title}`}
            className="object-cover w-[192px] md:w-full"
          />
        </div>

        <div className="p-6 flex-1">
          <div className="flex flex-col gap-y-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-12">
                <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
              </h2>

              <div className="mt-2 text-sm text-gray-11">
                {releaseYear && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
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
                      index < Math.round(voteStars / 2)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-6"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-12">
                {voteAverage}/10
              </span>
              <span className="text-xs text-gray-11">
                ({movie.vote_count} votos)
              </span>
            </div>

            <div>
              <p className="text-gray-11 leading-relaxed line-clamp-3">
                {movie.overview ||
                  "Este filme ainda não possui uma sinopse disponível."}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={`/movie/${movie.id}`}
                className="px-4 py-2 bg-red-9 hover:bg-red-10 text-white text-sm font-medium 
                         rounded-lg transition-colors"
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
