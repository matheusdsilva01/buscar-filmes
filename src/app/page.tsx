import Link from "next/link";

import { MoviesHighlights } from "components/MoviesHighlights";
import { TabsFilterMovie } from "components/TabsFilterMovie";
import { Info, Star, Play, TrendingUp } from "lucide-react";
import { FilterOption, getPopularMovies } from "services/TMDB";

type Props = {
  searchParams: {
    query?: FilterOption;
  };
};

const Home = async (props: Props) => {
  const { query } = props.searchParams;

  const { results } = await getPopularMovies();
  const mostPopularMovie = results[0];

  const styleBackgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${mostPopularMovie?.backdrop_path})`
  };

  return (
    <>
      <div
        style={styleBackgroundImage}
        className="relative sm:min-h-[85vh] lg:-mt-[70px] text-white flex bg-no-repeat bg-center bg-cover overflow-hidden"
      >
        {/* Overlay gradiente aprimorado */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 w-full flex flex-col justify-end px-6 py-8 sm:px-12 lg:px-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-red-9/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-red-8/30">
                <TrendingUp className="size-4" />
                <span className="text-xs font-medium">Destaque da semana</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-gray-6/30">
                <Star fill="currentColor" className="size-4 text-yellow-400" />
                <span className="text-xs font-medium">
                  {mostPopularMovie.vote_average?.toFixed(1)}/10
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {mostPopularMovie.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl line-clamp-3 sm:line-clamp-none font-light">
                {mostPopularMovie.overview}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`movie/${mostPopularMovie.id}`}
                className="inline-flex items-center justify-center gap-3 bg-red-9 hover:bg-red-10 text-white md:px-8 md:py-4 px-4 py-2.5 rounded-lg font-semibold text-md transition-all"
              >
                <Play className="w-4 h-4" />
                Assistir agora
              </Link>

              <Link
                href={`movie/${mostPopularMovie.id}`}
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white md:px-8 md:py-4 px-4 py-2.5 rounded-lg font-semibold text-md transition-all"
              >
                <Info className="w-4 h-4" />
                Mais informações
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-6 mt-8 text-xs md:text-sm text-gray-300">
              {mostPopularMovie.release_date && (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-9 rounded-full" />
                  {new Date(mostPopularMovie.release_date).getFullYear()}
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                {mostPopularMovie.vote_count?.toLocaleString()} avaliações
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                {mostPopularMovie.popularity?.toFixed(0)} pontos de popularidade
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <TabsFilterMovie />
      <MoviesHighlights filter={query} />
    </>
  );
};

export default Home;
