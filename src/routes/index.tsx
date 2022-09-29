import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { RecentsMoviesContext } from "../context/recents";
import FilmDetails from "../pages/FilmDetails";
import Home from '../pages/Home';
import ResultSearch from "../pages/ResultSearch";

const Index = () => {
  return (
    <BrowserRouter>
      <RecentsMoviesContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:query" element={<ResultSearch />} />
          <Route path="/filmDetails/:id" element={<FilmDetails />} />
        </Routes>
        <Footer />
      </RecentsMoviesContext>
    </BrowserRouter>
  )
}

export default Index;