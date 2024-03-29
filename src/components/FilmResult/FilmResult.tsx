import Link from "next/link";

import { IFilm } from "types/Film";

interface FilmResultProps {
  film: IFilm;
}

const FilmResult = ({ film }: FilmResultProps) => {
  return (
    <Link
      key={film.id}
      href={`/film/${film.id}`}
      className="bg-black-bright text-white flex flex-col md:flex-row cursor-pointer rounded-lg shadow-slate-700 shadow-[0_0_2px] hover:shadow-[0_0_5px] duration-200"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt={`Capa do filme ${film.title}`}
        className="w-56 mx-auto md:w-32 md:max-w-[128px] object-cover rounded-l-[5px]"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/icons/imgError.svg";
        }}
      />
      <div className="ml-2 py-3 flex-1">
        <h1 className="text-2xl font-bold">{film.title}</h1>
        <p className="text-sm md:text-base" data-testid="overview">
          {film.overview ? film.overview : "Este filme não contem descrição :("}
        </p>
      </div>
    </Link>
  );
};

export default FilmResult;
