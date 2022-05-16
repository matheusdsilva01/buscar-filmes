import { useEffect, useState } from "react";
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



    const loadDados = async () => {
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

    {/* get imagem de filme usar https://image.tmdb.org/t/p/w500/ */}
    return (
        <>
            <Header />
            <h1>Seu site favorito para busca de filmes</h1>
            {/* <div
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${filmCover?.backdrop_path})`}}
            className="w-full h-screen bg-cover">
                <input type="text" onChange={(e) => setFilm(e.target.value)} placeholder="Nome do filme" />
                <button onClick={loadDados} >Buscar</button>
            </div>
            {resultFilms.map(e => {
                return (
                    <div key={e.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title} />
                        <p>{e.title}</p>
                    </div>
                )
            })}
             */}
        </>
    )
}

export default App;