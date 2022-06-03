import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from '../pages/Home';
import ResultSearch from "../pages/ResultSearch";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:query" element={<ResultSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index;