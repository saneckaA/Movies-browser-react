import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies/MoviesList";
import MovieDetail from "./MovieDetail";
import People from "./People";
import PersonDetail from "./PersonDetail";
import MoviesList from "./Movies/MoviesList";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectIsDark } from "./themeSlice";

function App() {
    
   const isDark = useSelector(selectIsDark);

  return (
    <HashRouter>
      <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header />
        <Routes >
          <Route path="personDetail" element={<PersonDetail />} />
          <Route path="/people" element={<People />} />
          <Route path="/movieDetail" element={<MovieDetail />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
