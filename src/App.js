import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies/MoviesList";
import MovieDetail from "./MovieDetail";
import People from "./People";
import PersonDetail from "./PersonDetail";
import MoviesList from "./Movies/MoviesList";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useSwitchTheme } from "./useSwitchTheme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
    
    const [theme, setTheme] = useSwitchTheme();

  return (
    <HashRouter>
      <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header setTheme={setTheme} />
        <Routes >
          <Route path="personDetail" element={<PersonDetail />} />
          <Route path="/people" element={<People />} />
          <Route path="/movieDetail" element={<MovieDetail />} />
          <Route theme={theme} path="/movies" element={<MoviesList />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
