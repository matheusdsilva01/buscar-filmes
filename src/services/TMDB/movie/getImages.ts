import { api } from "lib/api";
import { Iimages } from "types/Images";

type GetMovieImagesProps = {
  id: string;
  includeImageLanguage?: string;
};

export function getMovieImages({ 
  id, 
  includeImageLanguage = "en,null" 
}: GetMovieImagesProps) {
  return api.get<Iimages>(`/movie/${id}/images`, {
    params: {
      include_image_language: includeImageLanguage
    }
  });
}