import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import FilmResult from "components/FilmResult";
import Pagination from "components/Pagination";
import { IFilm } from "interfaces/Film";
import api from "service/api";

interface IResultResponse {
  results: IFilm[];
  total_pages: number;
  total_results: number;
  page: number;
}

export default function ResultSearch() {
  const [page, setPage] = useState<number>(1);
  const [resultFilms, setResultFilms] = useState<IResultResponse | null>();
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    /* Query com paginação a aplicar:
    https://api.themoviedb.org/3/search/movie?api_key=0caef4704a61b607b5b3b22d56a0056b&page=2&language=pt-BR&query=Batman
    */
    query &&
      api
        .get(`/search/movie?page=${page}`, { params: { query } })
        .then(response => {
          setResultFilms(response.data);
        });
  }, [page, query]);

  return (
    <>
      <form
        className="w-full px-8 mb-8 mt-8"
        onSubmit={e => {
          e.preventDefault();
          setPage(1);
          router.push(`/search/${input.current?.value}`);
        }}
      >
        <input
          ref={input}
          type="text"
          placeholder="Pesquise um filme"
          className="w-full p-2 rounded-lg bg-black-bright text-white shadow-slate-700 shadow-[0_0_2px] placeholder:text-zinc-500"
        />
      </form>
      <Pagination
        onChangePage={setPage}
        page={page}
        total_page={resultFilms?.total_pages}
      />
      <section className="flex flex-col gap-y-5 px-10">
        {resultFilms?.results.map(film => (
          <FilmResult key={film.id} film={film} />
        ))}
      </section>
      <Pagination
        onChangePage={setPage}
        page={page}
        total_page={resultFilms?.total_pages}
      />
    </>
  );
}
