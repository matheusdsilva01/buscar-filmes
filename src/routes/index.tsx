import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import FilmDetails from '../pages/filmDetails';
import Home from '../pages/home';

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:query" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index;