import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilm } from '../interfaces/Film';

interface cardFilmProps {
  film: IFilm
}

const CardFilm = ({ film }: cardFilmProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`filmDetails/${film.id}`)}
      className='w-[258px] pb-3 bg-gray-50 cursor-pointer hover:shadow-[0_1px_5px] shadow-slate-700 duration-200'>
      <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={`Poster do filme: ${film.title}`} className='w-full h-[367px] object-cover' />
      <p className='pt-[10px] px-[10px]'>{film.title}</p>
    </div>
  )
}

export default CardFilm