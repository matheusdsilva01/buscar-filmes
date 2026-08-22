import { api } from "shared/api";

import { ProviderResponse } from "../types";

export async function getMovieProviders(id: string): Promise<ProviderResponse> {
  try {
    return await api.get<ProviderResponse>(`/movie/${id}/watch/providers`);
  } catch (error) {
    console.warn(`Failed to fetch providers for movie ${id}:`, error);
    return { id: Number(id), results: {} };
  }
}
