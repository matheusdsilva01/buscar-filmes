import { useEffect, useState } from "react";
import api from "./service/api";

function App() {
  // const [name, setName] = useState('')
  // const [overview, setOverview] = useState('')
  // const [img, setSrc] = useState('')
  const [resultFilms, setResultFilms] = useState([]);

  useEffect(() => {
    async function dados() {
      try {
        var response = await api.get("/3/search/movie", {
          params: { query: 've' }
        })
        console.log(response.data.results)
        setResultFilms(response.data.results)
      } catch (e) {
        console.log(e)
      }
    }
    dados()
  }, [])
  return (
    <>
      {/* {resultFilms.forEach(e => {
      return <h1>{e.title}</h1>
    })} */}
    </>
  )
}
export default App;