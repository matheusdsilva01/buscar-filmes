import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmDetails from '../pages/filmDetails';
import Home from '../pages/home';

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/film" element={<FilmDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Index;