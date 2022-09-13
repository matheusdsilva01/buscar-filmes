import { useEffect, useState } from 'react';
import { IFilm } from '../interfaces/Film';
import api from '../service/api';
import Carousel from './Carousel';
import CarouselSlider from './CarouselSlider';

const CardDestaques = () => {
  const [filmsDestaques, setFilmDestaques] = useState<IFilm[]>([]);

  useEffect(() => {
    api.get('/discover/movie?sort_by=popularity.desc').then((response) => {
      setFilmDestaques(response.data.results)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <h1 className='text-[32px] text-white font-light pt-16 px-9'>Em destaques</h1>
      {/* <Carousel items={filmsDestaques} visibleItemsNumber={window.innerWidth > 950 ? 3 : 1}/> */}
      <CarouselSlider items={filmsDestaques} />
    </>
  )
}

export default CardDestaques;