import { api, TMDBNotFoundError } from "shared/api";

import { Credits } from "../types";

export async function getMovieCredits(id: string): Promise<Credits> {
  try {
    return await api.get<Credits>(`/movie/${id}/credits`);
  } catch (error) {
    if (error instanceof TMDBNotFoundError) {
      return { id: Number(id), cast: [], crew: [] };
    }
    throw error;
  }
}

