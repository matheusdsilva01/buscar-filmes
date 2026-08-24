export type ImageIntent =
  | "POSTER_SM"
  | "POSTER_MD"
  | "BACKDROP_LG"
  | "PROFILE_SM"
  | "LOGO_MD"
  | "ORIGINAL"

class AssetResolver {
  private readonly TMDB_BASE_URL = "https://image.tmdb.org/t/p"

  private readonly SIZE_MAP: Record<ImageIntent, string> = {
    POSTER_SM: "w342",
    POSTER_MD: "w500",
    BACKDROP_LG: "w1280",
    PROFILE_SM: "w185",
    LOGO_MD: "w154",
    ORIGINAL: "original"
  }

  getMovieImage(path: string | null | undefined, intent: ImageIntent): string {
    if (!path) return "/icons/imgError.svg"
    const size = this.SIZE_MAP[intent]
    return `${this.TMDB_BASE_URL}/${size}${path}`
  }

  getHeroBackground(path: string | null | undefined): string {
    return this.getMovieImage(path, "BACKDROP_LG")
  }
}

export const assetResolver = new AssetResolver()
