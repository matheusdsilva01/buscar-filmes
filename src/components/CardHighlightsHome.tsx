import Carousel from "components/Carousel";
import { IFilm } from "interfaces/Film";

interface CardHighlightsHomeProps {
  filmsHighlights: IFilm[];
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
