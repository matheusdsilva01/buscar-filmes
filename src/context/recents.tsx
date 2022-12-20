import { createContext, ReactNode } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";
import { IFilmDetails } from "types/Film";

type RecentsMoviesContextType = {
  recentsFilms: any;
  addFilm: (film: IFilmDetails) => void;
};
export const ContextRecents = createContext({} as RecentsMoviesContextType);

interface props {
  children: ReactNode;
}
export const RecentsMoviesContext = ({ children }: props) => {
  const [recentsFilms, setRecentsFilms] = useLocalStorage<IFilmDetails[]>(
    "recents",
    []
  );

  const addFilm = (film: IFilmDetails) => {
    const movieInRecentList = !!recentsFilms.filter(
      (el: IFilmDetails) => el.id === film.id
    ).length;
    !movieInRecentList &&
      setRecentsFilms(filmsInList => [...filmsInList, film]);
  };

  return (
    <ContextRecents.Provider value={{ recentsFilms, addFilm }}>
      {children}
    </ContextRecents.Provider>
  );
};
