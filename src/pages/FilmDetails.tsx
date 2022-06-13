import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IFilmDetails } from "../interfaces/Film";
import { Providers } from "../interfaces/Providers";
import api from "../service/api";

export default function FilmDetails() {
  const [film, setFilm] = useState<IFilmDetails>();
  const [providersFilm, setProvidersFilm] = useState<Providers>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect((() => {
    api.get(`/movie/${id}`).then(response => {
      setFilm(response.data);
    })
    api.get(`/movie/${id}/watch/providers`).then(response => {
      setProvidersFilm(response.data.results.BR);
    })
  }), [])

  return (
    <>
      <div className="px-14 pt-5 min-h-screen">
        <section className="flex px-2 py-1 flex-row flex-wrap lg:flex-nowrap justify-center">
          <img className="w-96 object-cover flex" src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`} alt={`Poster do filme: ${film?.title}`} />
          <div className="ml-0 lg:ml-4">
            <div>
              <h1 className="text-3xl lg:text-5xl">{film?.title}</h1>
              <h6>{film?.tagline} </h6>
            </div>
            <p className="text-xl mt-4">{film?.overview}</p>
          </div>
        </section>
        <section>
          <h1>Informações:</h1>
          <ul>
            <li>
              <strong>Lançamento:</strong> {film?.release_date ? new Date(film?.release_date).toLocaleDateString() : null}
            </li>
            <li>
              <strong>Duração:</strong> {film?.runtime} minutos
            </li>
            <li>
              <strong>Gênero:</strong> {film?.genres.map(genre => genre.name).join(", ")}
            </li>
          </ul>
        </section>

        <section>
          <h1>Onde assistir</h1>
          <h3>Alugar:</h3>
          <ul className="flex flex-row gap-5">
            {providersFilm?.rent ? providersFilm?.rent.map(provider => (
              <li key={provider.provider_id} className="flex flex-row">
                <a href={providersFilm.link} target="_blank" rel="noopener noreferrer">
                  <img className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md" src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`} alt={provider.provider_name} />
                </a>
              </li>
            )) : <li>Nenhum provedor para aluguel disponível</li>}
          </ul>
          <h3>Stream:</h3>
          <ul className="flex flex-row gap-5">
            {providersFilm?.flatrate ? providersFilm?.flatrate.map(provider => (
              <li key={provider.provider_id} className="flex flex-row">
                <a href={providersFilm.link} target="_blank" rel="noopener noreferrer">
                  <img className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md" src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`} alt={provider.provider_name} />
                </a>
              </li>
            )) : <li>Não há stream disponível</li>}
          </ul>
          <h3>Comprar:</h3>
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
          <div className="flex items-center flex-wrap flex-row w-full p-2 gap-x-8 bg-slate-300">
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
