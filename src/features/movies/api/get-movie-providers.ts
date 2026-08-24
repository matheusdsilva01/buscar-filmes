import { api, TMDBNotFoundError } from "shared/api";

import { ProviderResponse } from "../types";

export async function getMovieProviders(id: string): Promise<ProviderResponse> {
  try {
    return await api.get<ProviderResponse>(`/movie/${id}/watch/providers`);
  } catch (error) {
    if (error instanceof TMDBNotFoundError) {
      return { id: Number(id), results: {} };
    }
    throw error;
  }
}

