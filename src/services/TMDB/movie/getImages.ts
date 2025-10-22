import { api } from "lib/api";
import { IImages } from "types/Images";

type GetMovieImagesProps = {
  id: string;
  includeImageLanguage?: string;
};

export function getMovieImages({ 
  id, 
  includeImageLanguage = "en,null" 
}: GetMovieImagesProps) {
  return api.get<IImages>(`/movie/${id}/images`, {
    params: {
      include_image_language: includeImageLanguage
    }
  });
}