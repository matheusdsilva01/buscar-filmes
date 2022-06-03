import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imgError from "../assets/icons/imgError.svg";
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
}

export default function ResultSearch() {
    const { query } = useParams();
    const input = useRef<HTMLInputElement>(null);
    const [resultFilms, setResultFilms] = useState<IFilm[]>([]);
    const [search, setSearch] = useState(query);
    const navigate = useNavigate();

    useEffect((() => {
        api.get("/search/movie", { params: { query: search } }).then(response => {
            setResultFilms(response.data.results)
        })
    }), [search])

    return (
        <>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setSearch(input.current?.value);
                }}
                className="w-full px-8 mb-8 mt-8">
                <input
                    ref={input}
                    type="text"
                    placeholder="Pesquise um filme"
                    className="w-full p-2 rounded-lg shadow-slate-700 shadow-[0_0_2px] placeholder:text-zinc-500" />
            </form>
            <section className="flex flex-col gap-y-5 px-10">
                {
                    resultFilms.map(item => (
                        <div key={item.id}
                         onClick={() => navigate(`/filmDetails/${item.id}`)}
                         className="bg-white flex cursor-pointer rounded-lg transition-colors shadow-slate-700 shadow-[0_0_2px] hover:shadow-[0_0_5px]">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt={`Capa do filme ${item.title}`}
                                className="w-[112px] object-cover rounded-l-[5px]"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = imgError;
                                }} />
                            <div className="ml-2 py-3">
                                <h1 className="text-2xl font-medium">{item.title}</h1>
                                <p className="font-normal">{item.overview}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}
