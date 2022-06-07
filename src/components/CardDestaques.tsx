import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useRef, useState } from 'react';
import { IFilm } from '../interfaces/Film';
import api from '../service/api';
import CardFilm from './CardFilm';

const CardDestaques = () => {
  const [filmsDestaques, setFilmDestaques] = useState<IFilm[][]>();
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    api.get('/discover/movie?sort_by=popularity.desc').then((response) => {
      separar(response.data.results, 3)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const separar = (base: [], maximo: number) => {
    var resultado: IFilm[][] = [[]];
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

  return (
    <>
      <h1 className='text-[32px] font-light pt-16 px-9'>Em destaques</h1>
      <div className='relative w-100'>
        <div className='w-full flex items-center snap-mandatory snap-x overflow-x-hidden' ref={ref}>
          {filmsDestaques?.map((film, index) => (
            <div key={index} className="w-full flex-none flex snap-center justify-evenly mb-1">
              {film.map((film) => (
                <CardFilm key={film.id} film={film} />
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
            className='absolute left-2 top-1/2'>
            <ChevronLeftIcon className='h-10 w-10' />
          </button>
        </div>
      </div>
    </>
  )
}

export default CardDestaques;