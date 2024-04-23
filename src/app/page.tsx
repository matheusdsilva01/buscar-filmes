import Link from "next/link";

import Film from "@heroicons/react/24/outline/FilmIcon";
import CardHighlightsHome from "components/CardHighlightsHome/CardHighlightsHome";
import api from "services/api";
import { IFilmPopulars } from "types/Film";

interface ResponseFilmPopulars {
  results: IFilmPopulars[];
}

const Home = async () => {
  const {
    data: { results: filmsHighlights }
  } = await api.get<ResponseFilmPopulars>(
    "/discover/movie?sort_by=popularity.desc"
  );
  const filmCover = filmsHighlights[0];

  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${filmCover?.backdrop_path})`
  };

  return (
    <div className="mb-6">
      <div
        style={backgroundImage}
        className="h-min text-white bg-no-repeat bg-center bg-cover"
      >
        <div className="md:flex w-full justify-evenly backdrop-brightness-50 px-6 py-4">
          <section className="items-center flex flex-col md:items-start">
            <h3 className="lg:text-5xl text-4xl mb-4 font-light">
              Destaque da semana
            </h3>
            <img
              className="w-80"
              src={`https://image.tmdb.org/t/p/original/${filmCover.poster_path}`}
              alt="Cover film most viewer"
            />
          </section>
          <section className="flex flex-col gap-6 p-5 items-center md:items-start">
            <div className="md:max-w-sm">
              <h2 className="text-4xl font-bold mb-2">{filmCover.title}</h2>
              <p>{filmCover.overview}</p>
            </div>
            <Link href={`film/${filmCover.id}`}>
              <span className="border-1 rounded-md px-2 py-1 gap-2 flex items-center cursor-pointer">
                <Film className="h-10 w-10" />
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
