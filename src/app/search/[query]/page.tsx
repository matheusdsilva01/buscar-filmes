"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { AxiosRequestConfig } from "axios";
import CardSkeleton from "components/CardSkeleton/CardSkeleton";
import FilmResult from "components/FilmResult/FilmResult";
import Pagination from "components/Pagination/Pagination";
import api from "services/api";
import useSWR, { Fetcher } from "swr";
import { IFilm } from "types/Film";

interface IResultResponse {
  results: IFilm[];
  total_pages: number;
  total_results: number;
  page: number;
}

export default function ResultSearch({
  params
}: {
  params: { query: string };
}) {
  const [page, setPage] = useState<number>(1);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const query = params.query;

  const fetcher: Fetcher<
    IResultResponse,
    [string, AxiosRequestConfig<any>]
  > = ([url, params]) => api.get(url, params).then(res => res.data);

  const { data: resultFilms, isLoading } = useSWR(
    query ? [`/search/movie?page=${page}`, { params: { query } }] : null,
    fetcher,
    {
      onSuccess: async data => {
        const images = data.results
          .map(film =>
            film.poster_path !== null
              ? `https://image.tmdb.org/t/p/original/${film.poster_path}`
              : null
          )
          .filter(Boolean) as string[];
        return data;
      }
    }
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
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
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
