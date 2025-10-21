import CardFilm from "components/CardFilm/CardFilm";
import {
  FilterOption,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingWeekMovies
} from "services/TMDB";

type MoviesHighlightsProps = {
  filter?: FilterOption;
};

export const MoviesHighlights = async ({ filter }: MoviesHighlightsProps) => {
  const urls = {
    trending: getTrendingWeekMovies,
    top_rated: getTopRatedMovies,
    popular: getPopularMovies
  };
  const { results } = await urls[filter || "popular"]();

  return (
    <section className="py-12 from-transparent bg-gray-1/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-red-9 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-12">
              {filter === 'trending' && 'Filmes em Alta'}
              {filter === 'top_rated' && 'Melhores Avaliados'}
              {(!filter || filter === 'popular') && 'Filmes Populares'}
            </h2>
          </div>
          <p className="text-gray-11 max-w-2xl">
            {filter === 'trending' && 'Os filmes mais assistidos e comentados da semana'}
            {filter === 'top_rated' && 'Filmes com as melhores notas da crítica e do público'}
            {(!filter || filter === 'popular') && 'Os filmes mais populares do momento'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {results.map(item => (
            <CardFilm film={item} />
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-3/50 hover:bg-gray-4/70 border border-gray-5/50 hover:border-gray-6/50 text-gray-11 hover:text-gray-12 rounded-xl font-medium transition-all duration-300">
            Carregar mais filmes
          </button>
        </div> */}
      </div>
    </section>
  );
};
