import { api } from "shared/api";

import { VideoResponse } from "../types";

export async function getMovieVideos(id: string): Promise<VideoResponse> {
  try {
    return await api.get<VideoResponse>(`/movie/${id}/videos`);
  } catch (error) {
    console.warn(`Failed to fetch videos for movie ${id}:`, error);
    return { id: Number(id), results: [] };
  }
}
