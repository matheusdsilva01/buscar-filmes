import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "lucide-react";
import { assetResolver } from "shared/utils/AssetResolver";

import { getMovieImages } from "../../api/get-movie-images";
import { Backdrop } from "../../types/Images";
import { SectionHeader } from "../SectionHeader";

interface MovieGalleryProps {
  movieId?: string;
  images?: Backdrop[];
  title: string;
}

export const MovieGallery = async ({
  movieId,
  images,
  title
}: MovieGalleryProps) => {
  let list = images;
  if (!list && movieId) {
    const imagesResponse = await getMovieImages(movieId);
    list = imagesResponse.backdrops;
  }

  const visibleImages = list?.slice(0, 12) || [];
  if (visibleImages.length === 0) return null;

  return (
    <section>
      <SectionHeader title="Galeria" />
      <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visibleImages.map((image, index) => (
          <Link
            key={index}
            href={assetResolver.getMovieImage(image.file_path, "ORIGINAL")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-video w-80 shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              width={500}
              height={281}
              loading="lazy"
              className="h-full w-full object-cover"
              src={assetResolver.getMovieImage(image.file_path, "POSTER_MD")}
              alt={`${title} - imagem ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <ExternalLink className="size-6 text-white" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
