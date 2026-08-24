import { api, TMDBNotFoundError } from "shared/api";

import { GetImagesParams, MovieImages } from "../types";

export async function getMovieImages(id: string): Promise<MovieImages> {
  try {
    return await api.get<MovieImages, GetImagesParams>(`/movie/${id}/images`, {
      params: { include_image_language: "en,pt,null" }
    });
  } catch (error) {
    if (error instanceof TMDBNotFoundError) {
      return { id: Number(id), backdrops: [], posters: [] };
    }
    throw error;
  }
}

