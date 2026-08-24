import Image from "next/image";

import { Star, Play, Clock, Calendar, Users } from "lucide-react";

import { MovieDetails } from "../../types/Movie";
import { domainTranslator } from "../../utils/DomainTranslator";

interface MovieHeroProps {
  movie: MovieDetails;
  trailer?: { key: string; name: string };
}

export const MovieHero = ({ movie, trailer }: MovieHeroProps) => {
  const rating = Number(movie.vote_average?.toFixed(1)) || 0;
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;

  const hours = movie.runtime ? Math.floor(movie.runtime / 60) : 0;
  const minutes = movie.runtime ? movie.runtime % 60 : 0;

  const styleBackgroundImage = movie.backdrop_path
    ? {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }
    : undefined;

  const trailerEmbedUrl =
    trailer && `https://www.youtube.com/embed/${trailer.key}`;

  return (
    <section
      style={styleBackgroundImage}
      className="relative flex min-h-[50vh] overflow-hidden bg-cover bg-center bg-no-repeat text-white sm:min-h-[70vh] lg:-mt-[70px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />

      <div className="relative z-10 flex w-full items-end px-6 py-8 pt-24 sm:px-12 lg:px-16 lg:pt-32">
        <div className="mx-auto flex w-full max-w-7xl gap-8">
          {movie.poster_path && (
            <div className="hidden shrink-0 md:block">
              <Image
                width={300}
                height={450}
                className="border-gray-5/50 w-64 rounded-xl border object-cover shadow-2xl"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Poster do filme: ${movie.title}`}
                priority
              />
            </div>
          )}

          <div className="flex min-w-0 flex-1 flex-col justify-end">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="border-gray-6/30 flex items-center gap-2 rounded-full border bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                <Star fill="currentColor" className="size-4 text-yellow-400" />
                <span className="text-sm font-medium">{rating}/10</span>
              </div>
              {movie.status && (
                <div className="bg-red-9/90 border-red-8/30 flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-xs font-medium">
                    {domainTranslator.translateMovieStatus(movie.status)}
                  </span>
                </div>
              )}
            </div>

            <h1 className="mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl lg:text-5xl">
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className="text-gray-11 mb-4 text-lg italic">
                {movie.tagline}
              </p>
            )}

            {movie.genres?.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                  <span
                    key={genre.id}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-gray-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {movie.overview && (
              <p className="mb-6 line-clamp-4 max-w-3xl text-base leading-relaxed font-light text-gray-200 sm:text-lg">
                {movie.overview}
              </p>
            )}

            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-300 sm:gap-6">
              {year && (
                <div className="flex items-center gap-2">
                  <Calendar className="text-red-9 size-4" />
                  <span>{year}</span>
                </div>
              )}
              {movie.runtime > 0 && (
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-yellow-400" />
                  <span>
                    {hours}h {minutes}m
                  </span>
                </div>
              )}
              {movie.vote_count > 0 && (
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-green-400" />
                  <span>
                    {movie.vote_count.toLocaleString("pt-BR")} avaliações
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {trailer && (
                <a
                  href="#trailer"
                  className="bg-red-9 hover:bg-red-10 inline-flex items-center gap-3 rounded-lg px-6 py-3 font-semibold text-white transition-all"
                >
                  <Play className="size-4" />
                  Assistir Trailer
                </a>
              )}
              {movie.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:border-white/30 hover:bg-white/20"
                >
                  IMDB
                </a>
              )}
            </div>

            {trailer && (
              <div id="trailer" className="mt-8 max-w-2xl">
                <iframe
                  className="aspect-video w-full rounded-xl"
                  src={trailerEmbedUrl}
                  allowFullScreen
                  title={`Trailer ${movie.title}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
