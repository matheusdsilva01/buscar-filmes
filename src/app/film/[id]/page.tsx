import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode
} from "react";

import { CarouselImages } from "components/CarouselImages";
import api from "services/api";
import { IFilmDetails } from "types/Film";
import { Iimages } from "types/Images";
import { translateStatusEnToPt } from "util/translateStatusFilm";

interface FilmDetailsProps {
  params: {
    id: string;
  };
}

const FilmDetails = async ({ params }: FilmDetailsProps) => {
  const id = params.id;
  const film = await api
    .get<IFilmDetails>(`/movie/${id}`)
    .then(response => response.data);

  const providersFilm = await api
    .get(`/movie/${id}/watch/providers`)
    .then(response =>
      response.data.results.BR ? response.data.results.BR : {}
    );

  const videos = await api
    .get(`/movie/${id}/videos`)
    .then(response => response.data.results);

  const images =
    (await api
      .get<Iimages>(`/movie/${id}/images`, {
        params: {
          language: ""
        }
      })
      .then(response => response.data)) || [];
  console.log(`https://image.tmdb.org/t/p/original${film?.backdrop_path}`);
  return (
    <>
      {film && (
        <Head>
          <title>Buscar filmes | {`${film.title}`}</title>
          <meta
            property="og:title"
            content={`Buscar filmes | ${film.title}`}
            key={`Buscar filmes | ${film.title}`}
          />
        </Head>
      )}
      <div className="px-14 pt-5 min-h-screen text-white">
        <section className="flex px-2 py-1 flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start relative">
          {film?.backdrop_path && (
            <div className="absolute h-full w-full -z-10 inset-0">
              <Image
                priority
                width={1920}
                height={1080}
                className="w-full object-cover max-w-screen-2xl m-auto blur-3xl"
                src={`https://image.tmdb.org/t/p/original${film?.backdrop_path}`}
                alt={`Backdrop do filme: ${film?.title}`}
              />
            </div>
          )}
          <Image
            width={500}
            height={608}
            className="w-96 object-cover flex"
            src={
              film?.poster_path
                ? `https://image.tmdb.org/t/p/w500${film?.poster_path}`
                : "/icons/imgError.svg"
            }
            alt={`Poster do filme: ${film?.title}`}
          />
          <div className="ml-0 lg:ml-4">
            <div>
              <h1 className="text-3xl lg:text-5xl">{film?.title}</h1>
              <h6 className="italic">{film?.tagline}</h6>
            </div>
            <div>
              <p className="text-xl mt-4 font-thin">{film?.overview}</p>
              {videos?.length > 0 && (
                <div className="mt-8 flex justify-center md:justify-start">
                  <iframe
                    className="aspect-video w-full max-w-screen-md"
                    src={`https://www.youtube.com/embed/${videos[0].key}`}
                    allowFullScreen
                    title={`Trailer ${film?.title}`}
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
                <strong>Status:</strong> {translateStatusEnToPt(film?.status)}
              </li>
              <li>
                <strong>Lançamento:</strong>{" "}
                {film?.release_date
                  ? new Date(film?.release_date).toLocaleDateString()
                  : "Sem data prevista"}
              </li>
              <li>
                <strong>Duração:</strong>{" "}
                {film?.runtime &&
                  `${Math.floor(film.runtime / 60)}h ${film.runtime % 60}m`}
              </li>
              <li>
                <strong>Gênero:</strong>{" "}
                {film?.genres
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
            <ul className="flex flex-row gap-10">
              {providersFilm?.rent ? (
                providersFilm?.rent.map(
                  (provider: {
                    provider_id: Key | null | undefined;
                    logo_path: any;
                    provider_name: string | undefined;
                  }) => (
                    <li key={provider.provider_id} className="flex flex-row">
                      <a
                        href={providersFilm.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md"
                          src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                          alt={provider.provider_name}
                        />
                      </a>
                    </li>
                  )
                )
              ) : (
                <li>Nenhum provedor para aluguel disponível</li>
              )}
            </ul>
            <strong>
              <h3>Stream:</h3>
            </strong>
            <ul className="flex flex-row gap-10">
              {providersFilm?.flatrate ? (
                providersFilm?.flatrate.map(
                  (provider: {
                    provider_id: Key | null | undefined;
                    logo_path: any;
                    provider_name: string | undefined;
                  }) => (
                    <li key={provider.provider_id} className="flex flex-row">
                      <a
                        href={providersFilm.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md"
                          src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                          alt={provider.provider_name}
                        />
                      </a>
                    </li>
                  )
                )
              ) : (
                <li>Não há stream disponível</li>
              )}
            </ul>
            <strong>
              <h3>Comprar:</h3>
            </strong>
            <ul className="flex flex-row gap-10">
              {providersFilm?.buy ? (
                providersFilm?.buy.map(
                  (provider: {
                    provider_id: Key | null | undefined;
                    logo_path: any;
                    provider_name: string | undefined;
                  }) => (
                    <li key={provider.provider_id} className="flex flex-row">
                      <Link
                        href={providersFilm.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="w-12 h-12 rounded-md duration-150 hover:shadow-gray-900 shadow-md"
                          src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                          alt={provider.provider_name}
                        />
                      </Link>
                    </li>
                  )
                )
              ) : (
                <li>Não há provedores para compra</li>
              )}
            </ul>
          </section>
        </section>
        <section className="my-8">
          {images.backdrops && <CarouselImages images={images.backdrops} />}
        </section>

        <section className="my-6">
          <h3>Produzido por: </h3>
          <div className="flex items-center flex-wrap flex-row w-full py-6 px-3 gap-x-8 bg-black-bright">
            {film?.production_companies.map(companie =>
              companie.logo_path ? (
                <Image
                  width={100}
                  height={80}
                  key={companie.id}
                  className="object-contain max-h-[80px] w-full max-w-[100px]"
                  src={`https://image.tmdb.org/t/p/original${companie.logo_path}`}
                  alt={(companie.name as string) || "alt"}
                />
              ) : (
                <p key={companie.id}>{companie.name}</p>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default FilmDetails;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const filmMostPopulars = await api
//     .get("/movie/popular")
//     .then(response => response.data.results);

//   const paths = filmMostPopulars.map((film: IFilm) => ({
//     params: { id: film.id.toString() }
//   }));

//   return {
//     paths,
//     fallback: true
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }: any) => {
//   const { id } = params;
//   const film = await api.get(`/movie/${id}`).then(response => response.data);

//   const providersFilm = await api
//     .get(`/movie/${id}/watch/providers`)
//     .then(response =>
//       response.data.results.BR ? response.data.results.BR : {}
//     );

//   const videos = await api
//     .get(`/movie/${id}/videos`)
//     .then(response => response.data.results);

//   const images = await api
//     .get(`/movie/${id}/images`, {
//       params: {
//         language: ""
//       }
//     })
//     .then(response => response.data);

//   return {
//     props: {
//       film,
//       providersFilm,
//       videos,
//       images
//     },
//     // 604800 seg
//     revalidate: 60 * 60 * 24 * 7
//   };
// };
