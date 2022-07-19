import { PlayIcon } from '@heroicons/react/solid';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IFilmDetails } from "../interfaces/Film";
import { Providers } from "../interfaces/Providers";
import api from "../service/api";

interface IVideos {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export default function FilmDetails() {
  const [film, setFilm] = useState<IFilmDetails>();
  const [providersFilm, setProvidersFilm] = useState<Providers>();
  const [videos, setVideos] = useState<IVideos[]>([]);
  const { id } = useParams();

  useEffect((() => {
    api.get(`/movie/${id}`).then(response => {
      setFilm(response.data);
    })
    api.get(`/movie/${id}/watch/providers`).then(response => {
      setProvidersFilm(response.data.results.BR);
    })
    api.get(`/movie/${id}/videos`).then(response => {
      setVideos(response.data.results);
    })
  }), [])
  console.log(videos);

  return (
    <>
      <div className="px-14 pt-5 min-h-screen text-white">
        <section className="flex px-2 py-1 flex-row flex-wrap lg:flex-nowrap justify-center">
          <img className="w-96 object-cover flex" src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`} alt={`Poster do filme: ${film?.title}`} />
          <div className="ml-0 lg:ml-4">
            <div>
              <h1 className="text-3xl lg:text-5xl">{film?.title}</h1>
              <h6>{film?.tagline} </h6>
            </div>
            <p className="text-xl mt-4">{film?.overview}</p>
            {videos?.length > 0 ? <button className="bg-gray-400 rounded-md hover:bg-gradient-to-tr from-slate-50 to-slate-700">
              <a href={`https://www.youtube.com/watch?v=${videos[0].key}`} className="w-full h-full flex items-center gap-1" target="_blank" rel="noopener noreferrer"><PlayIcon width={20} height={20} />Assistir trailer</a>
            </button> : null}
          </div>
        </section>
        <section>
          <h1>Informações:</h1>
          <ul>
            <li>
              <strong>Lançamento:</strong> {film?.release_date ? new Date(film?.release_date).toLocaleDateString() : null}
            </li>
            <li>
              <strong>Duração:</strong> {film?.runtime && `${Math.floor(film.runtime / 60)}h ${film.runtime % 60}m`}
            </li>
            <li>
              <strong>Gênero:</strong> {film?.genres.map(genre => genre.name).join(", ")}
            </li>
          </ul>
        </section>

        <section>
          <h1>Onde assistir</h1>
          <strong><h3>Alugar:</h3></strong>
          <ul className="flex flex-row gap-5">
            {providersFilm?.rent ? providersFilm?.rent.map(provider => (
              <li key={provider.provider_id} className="flex flex-row">
                <a href={providersFilm.link} target="_blank" rel="noopener noreferrer">
                  <img className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md" src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`} alt={provider.provider_name} />
                </a>
              </li>
            )) : <li>Nenhum provedor para aluguel disponível</li>}
          </ul>
          <strong><h3>Stream:</h3></strong>
          <ul className="flex flex-row gap-5">
            {providersFilm?.flatrate ? providersFilm?.flatrate.map(provider => (
              <li key={provider.provider_id} className="flex flex-row">
                <a href={providersFilm.link} target="_blank" rel="noopener noreferrer">
                  <img className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md" src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`} alt={provider.provider_name} />
                </a>
              </li>
            )) : <li>Não há stream disponível</li>}
          </ul>
          <strong><h3>Comprar:</h3></strong>
          <ul className="flex flex-row gap-5">
            {providersFilm?.buy ? providersFilm?.buy.map(provider => (
              <li key={provider.provider_id} className="flex flex-row">
                <a href={providersFilm.link} target="_blank" rel="noopener noreferrer">
                  <img className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md" src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`} alt={provider.provider_name} />
                </a>
              </li>
            )) : <li>Não há provedores para compra</li>}
          </ul>
        </section>


        <section className="mt-6">
          <h3>Produzido por: </h3>
          <div className="flex items-center flex-wrap flex-row w-full p-2 gap-x-8 bg-black-bright">
            {film?.production_companies.map(companie => (
              companie.logo_path != null ?
                <img key={companie.id} className="object-contain max-h-[80px] w-full max-w-[100px]" src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} alt="" /> : <p key={companie.id}>{companie.name}</p>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
