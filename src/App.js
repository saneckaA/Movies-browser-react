import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <HashRouter>
    <Header />
    <Routes >
      <Route path="/movieDetail" element={<MovieDetail />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/" element={<Movies />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
