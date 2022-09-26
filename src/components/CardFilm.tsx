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
      className='w-[258px] m-auto pb-3 bg-black-bright cursor-pointer rounded-md hover:shadow-[0_1px_5px] shadow-slate-700 duration-200'>
      <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={`Poster do filme: ${film.title}`} className='w-full h-[367px] rounded-t-md object-cover' />
      <p className='pt-[10px] px-[10px] text-white'>{film.title}</p>
    </div>
  )
}

export default CardFilm