import Carousel from "components/Carousel/Carousel";
import { IFilmPopulars } from "types/Film";

interface CardHighlightsHomeProps {
  filmsHighlights: IFilmPopulars[];
}

const CardHighlightsHome = ({ filmsHighlights }: CardHighlightsHomeProps) => {
  return (
    <>
      <h1 className="text-[32px] text-white font-light pt-16 px-9">
        Em destaques
      </h1>
      <Carousel items={filmsHighlights} />
    </>
  );
};

export default CardHighlightsHome;
