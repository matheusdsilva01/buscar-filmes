import { useNavigate } from "react-router-dom";
import imgError from "../assets/icons/imgError.svg";

interface FilmResultProps {
    film: IFilm
}

interface IFilm {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
}

const FilmResult = ({ film }: FilmResultProps) => {
    const navigate = useNavigate();

    return (
        <div key={film.id}
            onClick={() => navigate(`/filmDetails/${film.id}`)}
            className="bg-white flex cursor-pointer rounded-lg shadow-slate-700 shadow-[0_0_2px] hover:shadow-[0_0_5px] duration-200">
            <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={`Capa do filme ${film.title}`}
                className="w-[112px] object-cover rounded-l-[5px]"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = imgError;
                }} />
            <div className="ml-2 py-3">
                <h1 className="text-2xl font-medium">{film.title}</h1>
                <p className="font-normal">{film.overview}</p>
            </div>
        </div>
    )
}


export default FilmResult;