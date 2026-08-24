import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  getMovieDetails,
  getMovieVideos,
  MovieHero,
  MovieInfo,
  MovieCast,
  MovieProviders,
  MovieGallery,
  SimilarMovies
} from "features/movies";
import { assetResolver } from "shared/utils/AssetResolver";

interface MovieDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function MovieDetailsPage({
  params
}: MovieDetailsPageProps) {
  const { id } = params;

  const [movie, videosResponse] = await Promise.all([
    getMovieDetails(id),
    getMovieVideos(id).catch(() => ({ id: Number(id), results: [] }))
  ]);

  if (!movie) {
    notFound();
  }

  const videos = videosResponse.results || [];
  const trailer = videos.find(v => v.type === "Trailer") || videos[0];


  return (
    <>
      <MovieHero movie={movie} trailer={trailer} />

      <div className="container mx-auto space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <MovieInfo movie={movie} />

        <Suspense
          fallback={
            <div className="bg-gray-2/50 h-40 animate-pulse rounded-xl" />
          }
        >
          <MovieCast movieId={id} />
        </Suspense>

        <Suspense
          fallback={
            <div className="bg-gray-2/50 h-28 animate-pulse rounded-xl" />
          }
        >
          <MovieProviders movieId={id} />
        </Suspense>

        <Suspense
          fallback={
            <div className="bg-gray-2/50 h-48 animate-pulse rounded-xl" />
          }
        >
          <MovieGallery movieId={id} title={movie.title} />
        </Suspense>

        <Suspense
          fallback={
            <div className="bg-gray-2/50 h-64 animate-pulse rounded-xl" />
          }
        >
          <SimilarMovies movieId={id} />
        </Suspense>

        {movie.production_companies?.length > 0 && (
          <section>
            <h3 className="text-gray-12 mb-4 font-medium">Produzido por</h3>
            <div className="bg-gray-2/50 border-gray-5/50 flex flex-wrap items-center gap-8 rounded-xl border p-6">
              {movie.production_companies.map(company =>
                company.logo_path ? (
                  <Image
                    width={100}
                    height={80}
                    key={company.id}
                    className="max-h-[80px] w-full max-w-[100px] object-contain"
                    src={assetResolver.getMovieImage(
                      company.logo_path,
                      "LOGO_MD"
                    )}
                    alt={company.name || "Production company"}
                  />
                ) : (
                  <p key={company.id} className="text-gray-11 text-sm">
                    {company.name}
                  </p>
                )
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
