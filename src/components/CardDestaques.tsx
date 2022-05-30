import React, { useEffect, useState, useRef } from 'react'
import api from '../service/api';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
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
  const [filmsDestaques, setFilmDestaques] = useState<Film[][]>();
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    api.get('/discover/movie?sort_by=popularity.desc').then((response) => {
      separar(response.data.results, 3)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const separar = (base: [], maximo: number) => {
    var resultado: Film[][] = [[]];
    var grupo = 0;

    for (var indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }
      resultado[grupo].push(base[indice]);

      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }
    setFilmDestaques(resultado)
  }

  /***
   * add poster_path em card film e title
   */

  return (
    <>
      <h1 className='text-[32px] font-light pt-16 px-9'>Em destaques</h1>
      <div className='relative w-100'>
        <div className='w-full flex items-center snap-mandatory snap-x overflow-x-hidden' ref={ref}>
          {filmsDestaques?.map((film, index) => (
            <div key={index} className="w-full flex-none flex snap-center justify-evenly">
              {film.map((film) => (
                <CardFilm key={film.id} title={film.title} image={film.poster_path} />
              ))}
            </div>
          )
          )}
          <button
            onClick={() => {
              ref.current?.scrollBy({
                left: 1,
                behavior: 'smooth'
              })
            }}
            className='absolute right-2 top-1/2'>
            <ChevronRightIcon className='h-10 w-10' />
          </button>
          <button
            onClick={() => {
              ref.current?.scrollBy({
                left: -1,
                behavior: 'smooth'
              })
            }}
            className='absolute left-5 top-1/2'>
            <ChevronLeftIcon className='h-10 w-10' />
          </button>
        </div>
      </div>
    </>
  )
}

export default CardDestaques;