import React, { useEffect, useState } from 'react'
import api from '../service/api';
import CardFilm from './CardFilm';

interface Film {
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
const CardDestaques = () => {
  const [filmsDestaques, setFilmDestaques] = useState<Film[]>([])

  useEffect(() => {
    api.get('/discover/movie?sort_by=popularity.desc').then((response) => {
      setFilmDestaques(response.data.results)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  /***
   * add poster_path em card film e title
   */
  return (
    <>
      <h1 className='text-[32px] font-light pt-16 px-9'>Em destaques</h1>
      <div id="carouselExampleControls" className="carousel slide relative variant-dark" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden ">
          {filmsDestaques.map((film) => (
            <CardFilm title={film.title} image={film.poster_path} />
          )
          )}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default CardDestaques;