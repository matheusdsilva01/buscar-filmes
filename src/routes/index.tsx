import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FilmDetails from "../pages/FilmDetails";
import Home from '../pages/Home';
import ResultSearch from "../pages/ResultSearch";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:query" element={<ResultSearch />} />
        <Route path="/filmDetails/:id" element={<FilmDetails />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default Index;