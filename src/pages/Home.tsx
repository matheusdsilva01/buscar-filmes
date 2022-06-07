import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardDestaques from "../components/CardDestaques";
import { IFilm } from "../interfaces/Film";
import api from "../service/api";


function App() {
    const [query, setQuery] = useState<string>("");
    const [filmCover, setFilmCover] = useState<IFilm>();
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/movie/popular").then((response) => {
            setFilmCover(response.data.results[0])
        })
    }, [])

    {/* get imagem de filme usar https://image.tmdb.org/t/p/w500/ */ }
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    navigate(`film/${query}`)
                }}
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${filmCover?.backdrop_path})` }}
                className="flex items-center bg-center justify-center w-full h-screen bg-cover">
                <div className="max-w-[1096px] h-[105px] rounded-[20px] bg-gradient-to-b from-white/50 to-transparent w-full flex items-center justify-center">
                    <input
                        className="max-w-[810px] w-full py-4 h-[64px] px-9 text-[26px] font-light text-black rounded-[10px] font-merri"
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Procure por um filme..." />
                </div>
            </form>
            <CardDestaques />
        </>
    )
}

export default App;