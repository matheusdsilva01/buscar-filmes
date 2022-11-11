import { createContext, ReactNode, useReducer } from "react";
import { IFilmDetails } from "../interfaces/Film";
import recentsReducer from "./reducerRecents";

const initialState: any = [];
type RecentsMoviesContextType = {
  recentsMovies: any;
  addFilm: (film: IFilmDetails) => void;
};
export const ContextRecents = createContext({} as RecentsMoviesContextType);

interface props {
  children: ReactNode;
}
export const RecentsMoviesContext = ({ children }: props) => {
  const [recentsMovies, dispatch] = useReducer(
    recentsReducer,
    initialState,
    () => {
      const data = localStorage.getItem("recents");
      return data ? JSON.parse(data) : [];
    }
  );

  const addFilm = (film: IFilmDetails) =>
    dispatch({ type: "ADD", payload: film });

  return (
    <ContextRecents.Provider value={{ recentsMovies, addFilm }}>
      {children}
    </ContextRecents.Provider>
  );
};