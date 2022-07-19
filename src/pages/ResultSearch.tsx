import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import FilmResult from "../components/FilmResult";
import { IFilm } from "../interfaces/Film";
import api from "../service/api";

interface IResultResponse {
    results: IFilm[];
    total_pages: number;
    total_results: number;
    page: number;
}

export default function ResultSearch() {
    const { query } = useParams();
    const input = useRef<HTMLInputElement>(null);
    const [resultFilms, setResultFilms] = useState<IResultResponse | null>();
    const [search, setSearch] = useState<string | undefined>(query);
    const [page, setPage] = useState<number>(1)

    useEffect((() => {
        /* Query com paginação a aplicar:
            https://api.themoviedb.org/3/search/movie?api_key=0caef4704a61b607b5b3b22d56a0056b&page=2&language=pt-BR&query=Batman
        */
        api.get(`/search/movie?page=${page}`, { params: { query: search } }).then(response => {
            setResultFilms(response.data)
        })
    }), [search, page])

    return (
        <>
            <form className="w-full px-8 mb-8 mt-8"
                onSubmit={(e) => {
                    e.preventDefault();
                    setSearch(input.current?.value);
                }}>
                <input ref={input}
                    type="text"
                    placeholder="Pesquise um filme"
                    className="w-full p-2 rounded-lg bg-black-bright text-white shadow-slate-700 shadow-[0_0_2px] placeholder:text-zinc-500" />
            </form>
            <section className="flex flex-col gap-y-5 px-10">
                {resultFilms?.results.map(film => (
                    <FilmResult key={film.id} film={film} />
                ))}
                <button
                    disabled={page === 1}
                    className="bg-slate-400"
                    onClick={() => setPage(state => Math.max(1, state - 1))}
                > previus </button>
                <button
                    disabled={page === resultFilms?.total_pages}
                    className="bg-slate-400"
                    onClick={() => setPage((state) => Math.max(resultFilms?.total_pages ? resultFilms.total_pages : 0, state + 1))}
                > next </button>
            </section>
        </>
    )
}
