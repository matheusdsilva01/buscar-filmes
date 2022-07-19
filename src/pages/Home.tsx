import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardDestaques from "../components/CardDestaques";
import { IFilm } from "../interfaces/Film";
import Film from '@heroicons/react/solid/FilmIcon'
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
        <div className="mb-6">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    navigate(`film/${query}`)
                }}
                className="flex items-center bg-center justify-center w-full">
                <div className="h-[105px] bg-gradient-to-b from-slate-700/50 to-transparent w-full flex items-center flex-col">
                    <h1 className="flex-none">Busque pelo nome de um filme</h1>
                    <input
                        className="max-w-[810px] w-full py-4 h-[48px] px-9 text-[18px] font-light bg-black-bright text-white rounded-[10px] font-merri"
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Procure por um filme..." />
                </div>
            </form>
            <div className="h-min text-white md:flex w-full justify-evenly">
                <section className="text-4xl items-center flex flex-col md:items-start">
                    <h3>Filme mais assistido da semana</h3>
                    <img className="w-80" src={`https://image.tmdb.org/t/p/w500${filmCover?.poster_path}`} />
                </section>
                <section className="flex flex-col justify-between p-5 items-center md:items-start">
                    <div className="md:max-w-sm">
                        <h2 className="text-3xl font-merri mb-2">{filmCover?.title}</h2>
                        <p>{filmCover?.overview}</p>
                    </div>
                    <button onClick={() => navigate(`filmDetails/${filmCover?.id}`)} className="border-1 rounded-md bg flex items-center"><Film className='h-10 w-10' />Ver mais detalhes</button>
                </section>
            </div>
            <CardDestaques />
        </div>
    )
}

export default App;