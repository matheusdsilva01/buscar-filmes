"use client";
import Image from "next/image";
import Link from "next/link";

import { Star } from "lucide-react";
import { IFilm } from "types/Film";

interface FilmResultProps {
  film: IFilm;
}

export const FilmResult = ({ film }: FilmResultProps) => {
  const srcImage = film.poster_path
    ? `https://image.tmdb.org/t/p/original/${film.poster_path}`
    : "/icons/imgError.svg";
  const voteAverage = Number(film.vote_average?.toFixed() || 0);

  return (
    <div
      key={film.id}
      className="bg-black-bright relative isolate text-white overflow-auto flex flex-col md:flex-row rounded-lg shadow-slate-700 shadow-[0_0_2px] hover:shadow-[0_0_5px]"
    >
      <Image
        src={srcImage}
        width={224}
        height={336}
        alt={`Capa do filme ${film.title}`}
        className="w-56 mx-auto md:w-32 md:max-w-[128px] object-cover"
      />
      <div className="ml-2 py-3 flex-1">
        <h1 className="text-2xl font-bold">
          <Link href={`/film/${film.id}`}>
            <span className="absolute inset-0 z-10" />
            {film.title}
          </Link>
        </h1>
        <div className="flex">
          {Array.from({ length: voteAverage }).map((_, index) => (
            <Star
              key={index}
              fill="currentColor"
              className="w-3 h-3 text-yellow-400"
            />
          ))}
          {Array.from({ length: 10 - voteAverage }).map((_, index) => (
            <Star key={index} className="w-3 h-3 text-white" />
          ))}
        </div>
        <p className="text-sm md:text-base" data-testid="overview">
          {film.overview ? film.overview : "Este filme não contem descrição :("}
        </p>
      </div>
    </div>
  );
};
