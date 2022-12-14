import { GetStaticPaths, GetStaticProps } from "next";
import { useContext, useEffect, useRef } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ContextRecents } from "../../context/recents";
import { IFilm, IFilmDetails } from "../../interfaces/Film";
import { Iimages } from "../../interfaces/Images";
import { Providers } from "../../interfaces/Providers";
import api from "../../service/api";
import { translateStatusEnToPt } from "../../util/translateStatusFilm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface IVideos {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

interface FilmDetailsProps {
  film: IFilmDetails;
  providersFilm: Providers;
  videos: IVideos[];
  images: Iimages;
}

const FilmDetails = ({
  film,
  images,
  providersFilm,
  videos
}: FilmDetailsProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const { addFilm } = useContext(ContextRecents);

  useEffect(() => {
    addFilm(film);
  }, [film]);
  return (
    <>
      <div className="px-14 pt-5 min-h-screen text-white">
        <section className="flex px-2 py-1 flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start">
          <img
            className="w-96 object-cover flex"
            src={`https://image.tmdb.org/t/p/original${film?.poster_path}`}
            alt={`Poster do filme: ${film?.title}`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/imgError.svg";
            }}
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
                {film?.genres.map(genre => genre.name).join(", ")}.
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
                providersFilm?.rent.map(provider => (
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
                ))
              ) : (
                <li>Nenhum provedor para aluguel disponível</li>
              )}
            </ul>
            <strong>
              <h3>Stream:</h3>
            </strong>
            <ul className="flex flex-row gap-10">
              {providersFilm?.flatrate ? (
                providersFilm?.flatrate.map(provider => (
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
                ))
              ) : (
                <li>Não há stream disponível</li>
              )}
            </ul>
            <strong>
              <h3>Comprar:</h3>
            </strong>
            <ul className="flex flex-row gap-10">
              {providersFilm?.buy ? (
                providersFilm?.buy.map(provider => (
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
                ))
              ) : (
                <li>Não há provedores para compra</li>
              )}
            </ul>
          </section>
        </section>
        <section className="my-8">
          <Swiper
            modules={[Navigation, Scrollbar]}
            scrollbar={{
              hide: false,
              draggable: true,
              dragClass: "swiper-scrollbar-drag-custom-white"
            }}
            lazy={true}
            navigation={{
              nextEl: nextRef?.current,
              prevEl: prevRef?.current
            }}
            onInit={swiper => {
              //@ts-ignore
              swiper.params.navigation.prevEl = prevRef.current!;
              //@ts-ignore
              swiper.params.navigation.nextEl = nextRef.current!;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={2.3}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2.3,
                spaceBetween: 20,
                speed: 500
              },
              1024: {
                slidesPerView: 3.3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                speed: 700
              }
            }}
          >
            {images &&
              images.backdrops.map(bd => (
                <SwiperSlide key={bd.file_path}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${bd.file_path}`}
                    alt="backdrop"
                  />
                </SwiperSlide>
              ))}
            <button
              ref={prevRef}
              className="w-auto swiper-button-prev after:content-none drop-shadow-sm shadow-black"
            >
              <ChevronLeftIcon width={48} color="white" />
            </button>
            <button
              ref={nextRef}
              className="w-auto swiper-button-next after:content-none drop-shadow-sm shadow-black"
            >
              <ChevronRightIcon width={48} color="white" />
            </button>
          </Swiper>
        </section>

        <section className="my-6">
          <h3>Produzido por: </h3>
          <div className="flex items-center flex-wrap flex-row w-full py-6 px-3 gap-x-8 bg-black-bright">
            {film?.production_companies.map(companie =>
              companie.logo_path != null ? (
                <img
                  key={companie.id}
                  className="object-contain max-h-[80px] w-full max-w-[100px]"
                  src={`https://image.tmdb.org/t/p/original${companie.logo_path}`}
                  alt={companie.name}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const filmMostPopulars = await api
    .get("/movie/popular")
    .then(response => response.data.results);

  const paths = filmMostPopulars.map((film: IFilm) => ({
    params: { id: film.id.toString() }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const film = await api.get(`/movie/${id}`).then(response => response.data);

  const providersFilm = await api
    .get(`/movie/${id}/watch/providers`)
    .then(response =>
      response.data.results.BR ? response.data.results.BR : {}
    );

  const videos = await api
    .get(`/movie/${id}/videos`)
    .then(response => response.data.results);

  const images = await api
    .get(`/movie/${id}/images`, {
      params: {
        language: ""
      }
    })
    .then(response => response.data);

  return {
    props: {
      film,
      providersFilm,
      videos,
      images
    },
    // 604800 seg
    revalidate: 60 * 60 * 24 * 7
  };
};
