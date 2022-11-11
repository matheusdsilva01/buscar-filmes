import { useNavigate } from "react-router-dom";
import imgError from "../assets/icons/imgError.svg";
import { IFilm } from "../interfaces/Film";

interface FilmResultProps {
  film: IFilm;
}

const FilmResult = ({ film }: FilmResultProps) => {
  const navigate = useNavigate();

  return (
    <div
      key={film.id}
      onClick={() => navigate(`/filmDetails/${film.id}`)}
      className="bg-black-bright text-white flex flex-col md:flex-row cursor-pointer rounded-lg shadow-slate-700 shadow-[0_0_2px] hover:shadow-[0_0_5px] duration-200"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt={`Capa do filme ${film.title}`}
        className="w-56 mx-auto md:w-32 md:max-w-[128px] object-cover rounded-l-[5px]"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = imgError;
        }}
      />
      <div className="ml-2 py-3 flex-1">
        <h1 className="text-2xl font-bold">{film.title}</h1>
        <p className="text-sm md:text-base">
          {film.overview ? film.overview : "Este filme não contem descrição :("}
        </p>
      </div>
    </div>
  );
};

export default FilmResult;
