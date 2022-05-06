import { useState } from "react";
import Header from '../../components/header';
import api from "../../service/api";
import './index.css'

function App() {
    const [resultFilms, setResultFilms] = useState([]);
    const [film, setFilm] = useState("");

    const getNameFilm = (e) => {
        setFilm(e.target.value);
    }


    const loadDados = async () => {
        if (film != "") {
            try {
                var response = await api.get("/3/search/movie", { params: { query: `${film}` } })
                console.log(response)
                setResultFilms(response.data.results)
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <>
            <Header />
            <h1>Seu site favorito para busca de filmes</h1>
            <div>
                <input type="text" onChange={getNameFilm} placeholder="Nome do filme" />
                <button onClick={loadDados} >Buscar</button>
            </div>
            {/* {resultFilms.map(e => {
                return (
                    <div key={e.id}>
                        <img src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`} alt={e.title} />
                        <p>{e.title}</p>
                    </div>
                )
            })} */}
        </>
    )
}

export default App;