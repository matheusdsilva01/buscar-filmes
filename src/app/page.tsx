import Image from "next/image";
import Link from "next/link";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import CardHighlightsHome from "components/CardHighlightsHome/CardHighlightsHome";
import api from "services/api";
import { IFilmPopulars as IFilmPopular } from "types/Film";

interface ResponseFilmPopular {
  results: IFilmPopular[];
}

const Home = async () => {
  const {
    data: { results: filmsHighlights }
  } = await api.get<ResponseFilmPopular>("/movie/popular");
  const mostPopularMovie = filmsHighlights[0];

  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${mostPopularMovie?.backdrop_path})`
  };

  return (
    <div className="mb-6">
      <div
        style={backgroundImage}
        className="sm:min-h-[640px] text-white flex bg-no-repeat bg-center bg-cover"
      >
        <div className="w-full flex-1 backdrop-brightness-50 px-6 py-4">
          <div className="flex items-center">
            <h3 className="text-xs w-fit bg-gray-600 rounded-full px-2 py-1">
              Destaque da semana
            </h3>
            <div className="flex items-center ml-2">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <p className="ml-1 text-xs flex">
                {mostPopularMovie.vote_average}
              </p>
            </div>
          </div>
          <section className="flex flex-col gap-6 sm:p-5">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-2">
                {mostPopularMovie.title}
              </h2>
              <p className="line-clamp-6 sm:line-clamp-none">
                {mostPopularMovie.overview}
              </p>
            </div>
            <Link href={`film/${mostPopularMovie.id}`}>
              <span className="bg-zinc-900 rounded-md p-4 gap-2 w-fit flex items-center cursor-pointer">
                <InformationCircleIcon className="" width={20} height={20} />
                Ver mais detalhes
              </span>
            </Link>
          </section>
        </div>
      </div>
      <CardHighlightsHome filmsHighlights={filmsHighlights} />
    </div>
  );
};

export default Home;
