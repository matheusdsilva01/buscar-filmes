import Image from "next/image";
import Link from "next/link";

import { IFilm, IFilmPopulars } from "types/Film";

interface cardFilmProps {
  film: IFilm | IFilmPopulars;
}

const CardFilm = ({ film }: cardFilmProps) => {
  return (
    <Link
      href={`film/${film.id}`}
      className="block w-[258px] m-auto pb-3 bg-black-bright cursor-pointer rounded-md hover:shadow-[0_1px_5px] shadow-slate-700 duration-200"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        alt={`Poster do filme: ${film.title}`}
        className="w-auto h-auto rounded-t-md object-cover"
        width={258}
        height={367}
        style={{ objectFit: "cover", height: "367px", width: "258px" }}
      />
      <p className="pt-[10px] px-[10px] text-white">{film.title}</p>
    </Link>
  );
};

export default CardFilm;
