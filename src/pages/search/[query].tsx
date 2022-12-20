import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { AxiosRequestConfig } from "axios";
import FilmResult from "components/FilmResult";
import Pagination from "components/Pagination";
import api from "services/api";
import useSWR, { Fetcher } from "swr";
import { IFilm } from "types/Film";

interface IResultResponse {
  results: IFilm[];
  total_pages: number;
  total_results: number;
  page: number;
}

export default function ResultSearch() {
  const [page, setPage] = useState<number>(1);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { query } = router.query;

  const fetcher: Fetcher<
    IResultResponse,
    [string, AxiosRequestConfig<any>]
  > = ([url, params]) => api.get(url, params).then(res => res.data);

  const {
    data: resultFilms,
    isLoading,
    error
  } = useSWR(
    query ? [`/search/movie?page=${page}`, { params: { query } }] : null,
    fetcher
  );

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
        totalPages={resultFilms?.total_pages}
      />
      <section className="flex flex-col gap-y-5 px-10">
        {resultFilms?.results.map(film => (
          <FilmResult key={film.id} film={film} />
        ))}
      </section>
      <Pagination
        onChangePage={setPage}
        page={page}
        totalPages={resultFilms?.total_pages}
      />
    </>
  );
}
