import React from 'react'
interface cardFilmProps {
  image: string,
  title: string
}
const CardFilm = ({ title, image }: cardFilmProps) => {
  return (
    <div className='w-[258px] bg-gray-50'>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="" className='w-full h-[367px] object-cover' />
      <p className='pt-[10px] px-[10px]'>{title}</p>
    </div>
  )
}

export default CardFilm