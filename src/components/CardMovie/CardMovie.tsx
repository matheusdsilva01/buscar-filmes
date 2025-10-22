import Image from "next/image";
import Link from "next/link";

import { Star, Calendar, TrendingUp } from "lucide-react";
import { IMovie, IMoviePopular } from "types/Movie";

interface cardMovieProps {
  movie: IMovie | IMoviePopular;
}

const CardMovie = ({ movie }: cardMovieProps) => {
  const rating = Number(movie.vote_average?.toFixed(1)) || 0;
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;
  const isHighRated = rating >= 8.0;
  const isPopular = movie.popularity && movie.popularity > 100;

  return (
    <Link
      href={`movie/${movie.id}`}
      className="group relative block cursor-pointer rounded-xl overflow-hidden bg-gray-2/50 border border-gray-5/50 hover:border-red-9/50 transition-all"
    >
      {/* Container da imagem */}
      <div className="relative overflow-hidden">
        <Image
          key={`film-${movie.id}`}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Poster do filme: ${movie.title}`}
          placeholder="blur"
          blurDataURL="/load.png"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={300}
          height={450}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isHighRated && (
            <div className="flex items-center gap-1 bg-yellow-500/90 backdrop-blur-sm text-black px-2 py-1 rounded-full text-xs font-bold">
              <Star className="size-3 fill-current" />
              {rating}
            </div>
          )}
          {isPopular && (
            <div className="flex items-center gap-1 bg-red-9/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold">
              <TrendingUp className="size-3" />
              Em alta
            </div>
          )}
        </div>

        {/* Informações no hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
          <div className="space-y-2">
            {year && (
              <div className="flex items-center gap-1 text-gray-300 text-xs">
                <Calendar className="size-3" />
                <span>{year}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${
                    i < Math.round(rating / 2)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-6"
                  }`}
                />
              ))}
              <span className="text-xs text-gray-300 ml-1">{rating}/10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-12 text-sm leading-tight line-clamp-2 group-hover:text-red-9 transition-colors">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <Star className="size-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-11 font-medium">{rating}</span>
          </div>
          {year && <span className="text-xs text-gray-10">{year}</span>}
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
