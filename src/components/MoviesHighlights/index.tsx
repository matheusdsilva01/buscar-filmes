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
    <section className="grid grid-cols-2 md:grid-cols-4 px-8 lg:grid-cols-6 container mx-auto flex-wrap gap-x-4 gap-y-6 justify-center">
      {results.map(item => (
        <CardFilm key={item.id} film={item} />
      ))}
    </section>
  );
};
