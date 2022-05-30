import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";

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
}

export default function FilmDetails() {
  const [resultFilms, setResultFilms] = useState<IFilm[]>([]);
  const { query } = useParams();

  useEffect((() => {
    api.get("/search/movie", { params: { query: query } }).then(response => {
      setResultFilms(response.data.results)
    })
  }), [])

  return (
    <>
    <h1>Hello world</h1>
      {
        resultFilms.map(item => (
          <div key={item.id}>{item.title}</div>
        ))
      }
    </>
  )
}
