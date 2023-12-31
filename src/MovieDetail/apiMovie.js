import axios from "axios";
import { setCast, setCrew, setError, setLoading, setMovie } from "./movieSlice";
import { setMovies, setTotalPages, setTotalResults } from "../Movies/moviesSlice";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";


export const fetchMovie = (movieId, language, searchQuery) => async (dispatch) => {
    if (searchQuery) {
        dispatch(setLoading(true));
        try {
            const searchUrl = `${apiUrl}search/movie?api_key=${apiKey}&language=${language}&query=${searchQuery}`;
            const searchResponse = await axios.get(searchUrl);
            dispatch(setMovies(searchResponse.data.results));
        dispatch(setLoading(false));
        dispatch(setTotalPages(searchResponse.data.total_pages));
        dispatch(setTotalResults(searchResponse.data.total_results));
        window.location.href=`/movies?search=${searchQuery}`
        } catch (error) {
            dispatch(setError(error));
            dispatch(setLoading(false));
        } 
    } else {
        const url = `${apiUrl}movie/${movieId}?api_key=${apiKey}&language=${language}`;
        dispatch(setLoading(true));
        try {
            const response = await axios.get(url);
            console.log("Details:", response.data);
            dispatch(setMovie(response.data));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error));
            dispatch(setLoading(false));
        }
    }
};

export const fetchCredits = (movieId, language) => async (dispatch) => {
    const url = `${apiUrl}movie/${movieId}/credits?api_key=${apiKey}&language=${language}`
    try {
        const response = await axios.get(url);
        console.log("Credits:", response.data)
        dispatch(setCast(response.data.cast));
        dispatch(setCrew(response.data.crew));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
    }
};
