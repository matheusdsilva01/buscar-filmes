import Link from "next/link";

import { MoviesHighlights } from "components/MoviesHighlights";
import { TabsFilterMovie } from "components/TabsFilterMovie";
import { Info, Star } from "lucide-react";
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
        className="sm:min-h-[740px] lg:-mt-[70px] text-white flex bg-no-repeat bg-center bg-cover"
      >
        <div className="w-full bg-linear-to-r flex flex-col from-black/80 to-transparent px-6 py-4">
          <div className="mt-auto sm:p-5">
            <div className="flex items-center">
              <h3 className="text-xs w-fit bg-gray-9 rounded-full px-2 py-1">
                Destaque da semana
              </h3>
              <div className="flex items-center ml-2">
                <Star fill="currentColor" className="h-4 w-4 text-yellow-400" />
                <p className="ml-1 text-xs flex">
                  {mostPopularMovie.vote_average}
                </p>
              </div>
            </div>
            <section className="flex flex-col mt-5 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-2">
                  {mostPopularMovie.title}
                </h2>
                <p className="line-clamp-6 font-light sm:line-clamp-none">
                  {mostPopularMovie.overview}
                </p>
              </div>
              <Link href={`film/${mostPopularMovie.id}`}>
                <span className="bg-gray-3 hover:bg-gray-4 transition-all rounded-md p-4 gap-2 w-fit flex items-center cursor-pointer">
                  <Info size={20} />
                  Ver mais detalhes
                </span>
              </Link>
            </section>
          </div>
        </div>
      </div>
      <TabsFilterMovie />
      <MoviesHighlights filter={query} />
    </>
  );
};

export default Home;
