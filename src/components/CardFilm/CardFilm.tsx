import Image from "next/image";
import Link from "next/link";

import { IFilm, IFilmsPopular } from "types/Film";

interface cardFilmProps {
  film: IFilm | IFilmsPopular;
}

const CardFilm = ({ film }: cardFilmProps) => {
  return (
    <Link
      href={`film/${film.id}`}
      className="relative min-h-72 block w-[190px] cursor-pointer rounded-md hover:shadow-sm shadow-slate-700 duration-200"
    >
      <Image
        key={`film-${film.id}`}
        src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        alt={`Poster do filme: ${film.title}`}
        placeholder="blur"
        blurDataURL="/load.png"
        className="w-auto h-auto rounded-t-md object-cover"
        width={258}
        height={367}
      />
      <p className="pt-2.5 text-sm font-medium absolute bottom-0 left-0 bg-black-bright/70 w-full px-2.5 text-white">
        {film.title}
      </p>
    </Link>
  );
};

export default CardFilm;
