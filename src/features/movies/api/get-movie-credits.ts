import { api } from "shared/api";

import { Credits } from "../types";

export async function getMovieCredits(id: string): Promise<Credits> {
  try {
    return await api.get<Credits>(`/movie/${id}/credits`);
  } catch (error) {
    console.warn(`Failed to fetch credits for movie ${id}:`, error);
    return { id: Number(id), cast: [], crew: [] };
  }
}
