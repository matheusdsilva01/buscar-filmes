import { api, TMDBNotFoundError } from "shared/api";

import { VideoResponse } from "../types";

export async function getMovieVideos(id: string): Promise<VideoResponse> {
  try {
    return await api.get<VideoResponse>(`/movie/${id}/videos`);
  } catch (error) {
    if (error instanceof TMDBNotFoundError) {
      return { id: Number(id), results: [] };
    }
    throw error;
  }
}

