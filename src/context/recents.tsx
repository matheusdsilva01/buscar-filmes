import { createContext, ReactNode, useEffect, useReducer } from "react";
import { IFilm, IFilmDetails } from "../interfaces/Film";
import recentsReducer from "./reducerRecents";

const initialState: any = [];

export const ContextRecents = createContext(initialState);

interface props {
    children: ReactNode
}
export const RecentsMoviesContext = ({ children }: props) => {
    const [recentsMovies, dispatch] = useReducer(recentsReducer, initialState, () => {
        const data = localStorage.getItem("recents")
        return data ? JSON.parse(data) : []
    });

    const addFilm = (film: IFilmDetails) => dispatch({ type: "ADD", payload: film })


    return (
        <ContextRecents.Provider value={{ recentsMovies, addFilm }}>
            {children}
        </ContextRecents.Provider>
    )
}