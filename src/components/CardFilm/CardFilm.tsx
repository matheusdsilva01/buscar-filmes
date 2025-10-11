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
      className="group relative cursor-pointer rounded-md hover:shadow-xs hover:shadow-slate-700"
    >
      <Image
        key={`film-${film.id}`}
        src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        alt={`Poster do filme: ${film.title}`}
        placeholder="blur"
        blurDataURL="/load.png"
        className="w-full h-full rounded-md"
        width={258}
        height={367}
      />
      <div className="absolute bottom-0 left-0 rounded-b-md bg-gray-4/70 w-full p-2.5">
        <p className="leading-none not-group-hover:truncate text-sm font-medium text-white">
          {film.title}
        </p>
      </div>
    </Link>
  );
};

export default CardFilm;
