import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IFilmDetails } from "../interfaces/Film";
import api from "../service/api";

export default function FilmDetails() {
  const [film, setFilm] = useState<IFilmDetails>();
  const { id } = useParams();

  useEffect((() => {
    api.get(`/movie/${id}`).then(response => {
      setFilm(response.data);
    })
  }), [])

  return (
    <>
      <div className="px-14 pt-5 min-h-screen">
        <section className="flex flex-row flex-wrap lg:flex-nowrap justify-center">
          <img className="w-96 object-cover flex" src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`} alt={`Poster do filme: ${film?.title}`} />
          <div className="ml-0 lg:ml-4">
            <div>
              <h1 className="text-3xl lg:text-5xl">{film?.title}</h1>
              <h6>{film?.tagline}</h6>
            </div>
            <p className="text-xl mt-4">{film?.overview}</p>
          </div>
        </section>
        <div className="mt-6">
          <h3>Produzido por: </h3>
          <div className="flex items-center flex-wrap flex-row w-full p-2 gap-x-8 bg-slate-300">
            {film?.production_companies.map(companie => (
              companie.logo_path != null ?
                <img key={companie.id} className="object-contain max-h-[80px] w-full max-w-[100px]" src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} alt="" /> : <p>{companie.name}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
