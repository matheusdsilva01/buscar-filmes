import Link from "next/link";

import { Info, Star, Play, TrendingUp } from "lucide-react";
import { assetResolver } from "shared/utils/AssetResolver";

import { getMovieHighlights } from "../../api/get-movie-highlights";

export const HeroSection = async () => {
  const { results } = await getMovieHighlights("popular");
  const mostPopularMovie = results[0];

  if (!mostPopularMovie) return null;

  const backdropUrl = assetResolver.getHeroBackground(
    mostPopularMovie?.backdrop_path
  );

  const styleBackgroundImage = {
    backgroundImage: `url(${backdropUrl})`
  };

  return (
    <div
      style={styleBackgroundImage}
      className="relative flex overflow-hidden bg-cover bg-center bg-no-repeat text-white sm:min-h-[85vh] lg:-mt-[70px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex w-full flex-col justify-end px-6 py-8 sm:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="bg-red-9/90 border-red-8/30 flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm">
              <TrendingUp className="size-4" />
              <span className="text-xs font-medium">Destaque da semana</span>
            </div>
            <div className="border-gray-6/30 flex items-center gap-2 rounded-full border bg-black/60 px-3 py-1.5 backdrop-blur-sm">
              <Star fill="currentColor" className="size-4 text-yellow-400" />
              <span className="text-xs font-medium">
                {mostPopularMovie.vote_average?.toFixed(1)}/10
              </span>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <h1 className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl leading-tight font-bold text-transparent sm:text-5xl lg:text-6xl">
              {mostPopularMovie.title}
            </h1>
            <p className="line-clamp-3 max-w-3xl text-lg leading-relaxed font-light text-gray-200 sm:line-clamp-none sm:text-xl">
              {mostPopularMovie.overview}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/movie/${mostPopularMovie.id}`}
              className="bg-red-9 hover:bg-red-10 text-md inline-flex items-center justify-center gap-3 rounded-lg px-4 py-2.5 font-semibold text-white transition-all md:px-8 md:py-4"
            >
              <Play className="h-4 w-4" />
              Assistir agora
            </Link>

            <Link
              href={`/movie/${mostPopularMovie.id}`}
              className="text-md inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-semibold text-white transition-all hover:border-white/30 hover:bg-white/20 md:px-8 md:py-4"
            >
              <Info className="h-4 w-4" />
              Mais informações
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-gray-300 md:gap-6 md:text-sm">
            {mostPopularMovie.release_date && (
              <div className="flex items-center gap-2">
                <span className="bg-red-9 h-2 w-2 rounded-full" />
                {new Date(mostPopularMovie.release_date).getFullYear()}
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {mostPopularMovie.vote_count?.toLocaleString()} avaliações
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              {mostPopularMovie.popularity?.toFixed(0)} pontos de popularidade
            </div>
          </div>
        </div>
      </div>

      <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </div>
  );
};
