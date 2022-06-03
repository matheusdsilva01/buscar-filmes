import { CurrencyBangladeshiIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";

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
  tagline: string;
  production_companies: IProductonCompanies[]
}
interface IProductonCompanies {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export default function FilmDetails() {
  const [film, setFilm] = useState<IFilm>();
  const { id } = useParams();

  useEffect((() => {
    api.get(`/movie/${id}`).then(response => {
      setFilm(response.data);
      console.log(response.data)
    })
  }), [])

  return (
    <>
      <div className="px-14 pt-5">
        <section className="flex flex-row">
          <img className="w-96 object-cover" src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`} alt={`Poster do filme: ${film?.title}`} />
          <div className="ml-4">
            <div>
              <h1 className="text-5xl">{film?.title}</h1>
              <h6>{film?.tagline}</h6>
            </div>
            <p className="text-xl mt-4">{film?.overview}</p>
          </div>
        </section>
        <div>
          <h3>Produzido por: </h3>
          <div className="flex flex-row w-full gap-x-8">
            {film?.production_companies.map(companie => (
              companie.logo_path != null ?
              <img key={companie.id} className="object-contain w-full max-w-[100px]" src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} alt="" /> : null
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
