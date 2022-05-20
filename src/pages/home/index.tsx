import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/header";
import api from "../../service/api";

export interface Film {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

function App() {
    const [resultFilms, setResultFilms] = useState<Film[]>([]);
    const [film, setFilm] = useState<string>("");
    const [filmCover, setFilmCover] = useState<Film>();

    useEffect(() => {
        async function chama() {
            var response = await api.get("/3/search/movie", { params: { query: "Shang-Chi and the Legend of the Ten Rings" } })
            setFilmCover(response.data.results[0])
        }
        chama()
    }, [])



    const loadDados = async (e: FormEvent) => {
        e.preventDefault()
        if (film) {
            try {
                var response = await api.get("/3/search/movie", { params: { query: `${film}` } })
                console.log(response)
                setResultFilms(response.data.results)
            } catch (e) {
                console.log(e)
            }
        }
    }

    {/* get imagem de filme usar https://image.tmdb.org/t/p/w500/ */ }
    return (
        <>
            <Header />
            <form
                onSubmit={(e) => loadDados(e)}
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${filmCover?.backdrop_path})` }}
                className="flex items-center justify-center w-full h-screen bg-cover">
                <div className="max-w-[1096px] h-[105px] rounded-[20px] bg-gradient-to-b from-white/50 to-transparent w-full flex items-center justify-center">
                    <input
                        className="max-w-[810px] w-full py-4 h-[64px] px-9 text-[26px] font-light text-black rounded-[10px] font-merri"
                        type="text"
                        onChange={(e) => setFilm(e.target.value)}
                        placeholder="Procure por um filme..." />
                </div>
            </form>
            {resultFilms.map(e => {
                return (
                    <div key={e.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title} />
                        <p>{e.title}</p>
                    </div>
                )
            })}

        </>
    )
}

export default App;