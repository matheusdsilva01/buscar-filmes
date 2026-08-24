export interface NavigationParams {
  query?: string;
  page?: number;
}

export class NavigationEngine {
  getSearchPath(params: NavigationParams): string {
    const searchParams = new URLSearchParams();

    if (params.query) {
      searchParams.set("query", params.query);
    }

    if (params.page && params.page > 1) {
      searchParams.set("page", params.page.toString());
    }

    const queryString = searchParams.toString();
    return queryString ? `/search?${queryString}` : "/search";
  }

  getMoviePath(id: number | string): string {
    return `/movie/${id}`;
  }

  getHomePath(): string {
    return "/";
  }
}

export const navigationEngine = new NavigationEngine();
