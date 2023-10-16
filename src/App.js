import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";
import People from "./People";
import PersonDetail from "./PersonDetail";

function App() {
  return (
    <HashRouter>
    <Header />
    <Routes >
      <Route path="personDetail" element={<PersonDetail />} />
      <Route path="/people" element={<People />} />
      <Route path="/movieDetail" element={<MovieDetail />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/" element={<Movies />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
