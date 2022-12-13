import { createContext, ReactNode, useReducer } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { IFilmDetails } from "../interfaces/Film";
import recentsReducer from "./reducerRecents";

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
