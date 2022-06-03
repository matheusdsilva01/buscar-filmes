import React from 'react'
import { useNavigate } from 'react-router-dom'
interface cardFilmProps {
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
  vote_count: number;
}
const CardFilm = ({ film }: cardFilmProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`filmDetails/${film.id}`)}
      className='w-[258px] pb-3 bg-gray-50 cursor-pointer transition-colors hover:shadow-[0_1px_5px] shadow-slate-700 '>
      <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={`Poster do filme: ${film.title}`} className='w-full h-[367px] object-cover' />
      <p className='pt-[10px] px-[10px]'>{film.title}</p>
    </div>
  )
}

export default CardFilm