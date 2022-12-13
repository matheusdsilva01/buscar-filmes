import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Film from "@heroicons/react/20/solid/FilmIcon";

import CardDestaques from "../components/CardDestaques";
import { IFilm } from "../interfaces/Film";
import api from "../service/api";

interface HomeProps {
  filmCover: IFilm;
}

const Home = ({ filmCover }: HomeProps) => {
  const router = useRouter();

  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${filmCover?.backdrop_path})`
  };

  return (
    <div className="mb-6">
      <div
        style={backgroundImage}
        className="h-min text-white bg-no-repeat bg-center bg-cover"
      >
        <div className="md:flex w-full justify-evenly backdrop-brightness-50 px-6 py-4">
          <section className="text-4xl items-center flex flex-col md:items-start">
            <h3 className="lg:text-5xl mb-4">Destaque da semana</h3>
            <img
              className="w-80"
              src={`https://image.tmdb.org/t/p/original/${filmCover?.poster_path}`}
              alt="Cover film most viewer"
            />
          </section>
          <section className="flex flex-col justify-between p-5 items-center md:items-start">
            <div className="md:max-w-sm">
              <h2 className="text-4xl font-bold mb-2">{filmCover?.title}</h2>
              <p className="font-light">{filmCover?.overview}</p>
            </div>
            <button
              onClick={() => router.push(`film/${filmCover?.id}`)}
              className="border-1 rounded-md bg flex items-center"
            >
              <Film className="h-10 w-10" />
              Ver mais detalhes
            </button>
          </section>
        </div>
      </div>
      <CardDestaques />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const filmCover = await api
    .get("/movie/popular")
    .then(response => response.data.results[0]);
  return {
    props: {
      filmCover
    }
  };
};

export default Home;
