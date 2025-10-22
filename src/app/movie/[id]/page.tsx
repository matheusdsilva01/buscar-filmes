import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

import {
  getMovieDetails,
  getMovieProviders,
  getMovieVideos,
  getMovieImages
} from "services/TMDB";
import { translateStatusEnToPt } from "util/translateStatusMovie";

interface MovieDetailsProps {
  params: {
    id: string;
  };
}

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const id = params.id;

  const [movie, providersResponse, videosResponse, images] = await Promise.all([
    getMovieDetails(id),
    getMovieProviders(id),
    getMovieVideos(id),
    getMovieImages({ id })
  ]);

  const providersMovie = providersResponse.results.BR || {};
  const videos = videosResponse.results;

  return (
    <>
      {movie && (
        <Head>
          <title>Buscar filmes | {`${movie.title}`}</title>
          <meta
            property="og:title"
            content={`Buscar filmes | ${movie.title}`}
            key={`Buscar filmes | ${movie.title}`}
          />
        </Head>
      )}
      <div className="px-14 pt-5 min-h-screen text-white">
        <section className="flex px-2 py-1 flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start relative">
          {movie?.backdrop_path && (
            <div className="absolute h-full w-full -z-10 inset-0">
              <Image
                priority
                width={1920}
                height={1080}
                className="w-full object-cover max-w-(--breakpoint-2xl) m-auto blur-3xl"
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt={`Backdrop do filme: ${movie?.title}`}
              />
            </div>
          )}
          <Image
            width={500}
            height={608}
            className="w-96 object-cover flex"
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                : "/icons/imgError.svg"
            }
            alt={`Poster do filme: ${movie?.title}`}
          />
          <div className="ml-0 lg:ml-4">
            <div>
              <h1 className="text-3xl lg:text-5xl">{movie?.title}</h1>
              <h6 className="italic">{movie?.tagline}</h6>
            </div>
            <div>
              <p className="text-xl mt-4 font-thin">{movie?.overview}</p>
              {videos?.length > 0 && (
                <div className="mt-8 flex justify-center md:justify-start">
                  <iframe
                    className="aspect-video w-full max-w-(--breakpoint-md)"
                    src={`https://www.youtube.com/embed/${videos[0].key}`}
                    allowFullScreen
                    title={`Trailer ${movie?.title}`}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:justify-between">
          <section className="mt-8">
            <h1 className="text-2xl">Informações:</h1>
            <ul>
              <li>
                <strong>Status:</strong> {translateStatusEnToPt(movie?.status)}
              </li>
              <li>
                <strong>Lançamento:</strong>{" "}
                {movie?.release_date
                  ? new Date(movie?.release_date).toLocaleDateString()
                  : "Sem data prevista"}
              </li>
              <li>
                <strong>Duração:</strong>{" "}
                {movie?.runtime &&
                  `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}
              </li>
              <li>
                <strong>Gênero:</strong>{" "}
                {movie?.genres
                  .map((genre: { name: any }) => genre.name)
                  .join(", ")}
                .
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h1 className="text-2xl">Onde assistir: </h1>
            <strong>
              <h3>Alugar:</h3>
            </strong>
            <ul className="flex flex-row gap-2">
              {providersMovie?.rent ? (
                providersMovie?.rent.map(
                  (provider: {
                    provider_id: Key | null | undefined;
                    logo_path: any;
                    provider_name: string | undefined;
                  }) => (
                    <li key={provider.provider_id} className="flex flex-row">
                      <a
                        href={providersMovie.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className="w-7 h-7 rounded-md border border-gray-7"
                          src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                          alt={provider.provider_name || "provider rent"}
                          width={28}
                          height={28}
                        />
                      </a>
                    </li>
                  )
                )
              ) : (
                <li className="text-sm">
                  Nenhum provedor para aluguel disponível
                </li>
              )}
            </ul>
            <strong>
              <h3>Stream:</h3>
            </strong>
            <ul className="flex flex-row gap-2">
              {providersMovie?.flatrate ? (
                providersMovie?.flatrate.map(
                  (provider: {
                    provider_id: Key | null | undefined;
                    logo_path: any;
                    provider_name: string | undefined;
                  }) => (
                    <li key={provider.provider_id} className="flex flex-row">
                      <a
                        href={providersMovie.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          width={28}
                          height={28}
                          className="w-7 h-7 rounded-md border border-gray-7"
                          src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                          alt={provider.provider_name || "provider flatrate"}
                        />
                      </a>
                    </li>
                  )
                )
              ) : (
                <li className="text-sm">Não há stream disponível</li>
              )}
            </ul>
            <strong>
              <h3>Comprar:</h3>
            </strong>
            <ul className="flex flex-row gap-2">
              {providersMovie?.buy ? (
                providersMovie?.buy.map(
                  (provider: {
                    provider_id: Key | null | undefined;
                    logo_path: any;
                    provider_name: string | undefined;
                  }) => (
                    <li key={provider.provider_id} className="flex flex-row">
                      <Link
                        href={providersMovie.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          width={28}
                          height={28}
                          className="w-7 h-7 rounded-md border border-gray-7"
                          src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                          alt={provider.provider_name || "provider buy"}
                        />
                      </Link>
                    </li>
                  )
                )
              ) : (
                <li className="text-sm">Não há provedores para compra</li>
              )}
            </ul>
          </section>
        </section>
        <section className="my-8 grid grid-flow-col gap-8 auto-cols-max grid-rows-2 overflow-auto">
          {images.backdrops &&
            images.backdrops.length > 0 &&
            images.backdrops.map(
              (image, index) =>
                image.file_path && (
                  <Link
                    key={index}
                    href={`https://image.tmdb.org/t/p/original${image.file_path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={500}
                      loading="lazy"
                      height={281}
                      className="w-full max-w-[250px] object-cover rounded-lg mb-4"
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={`Backdrop do filme: ${movie?.title}`}
                    />
                  </Link>
                )
            )}
        </section>

        <section className="my-6">
          <h3>Produzido por: </h3>
          <div className="flex items-center flex-wrap flex-row w-full py-6 px-3 gap-x-8 bg-black-bright">
            {movie?.production_companies.map(company =>
              company.logo_path ? (
                <Image
                  width={100}
                  height={80}
                  key={company.id}
                  className="object-contain max-h-[80px] w-full max-w-[100px]"
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                  alt={(company.name as string) || "alt"}
                />
              ) : (
                <p key={company.id}>{company.name}</p>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default MovieDetails;
