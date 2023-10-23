import axios from "axios";
import { setCast, setCrew, setError, setMovie, setMovieSuccess } from "./movieSlice";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";
const imgUrl = "https://image.tmdb.org/t/p/original"

export const fetchMovie = (movieId, language) => async (dispatch) => {
    const url = `${apiUrl}movie/${movieId}?api_key=${apiKey}&language=${language}`;
    dispatch(setMovie());
        try {
            const response = await axios.get(url);
            console.log("Details:", response.data);
            dispatch(setMovieSuccess(response.data));
        } catch (error) {
            dispatch(setError(error));
        }
    };

export const fetchCredits = (movieId, language) => async (dispatch) => {
    const url = `${apiUrl}movie/${movieId}/credits?api_key=${apiKey}&language=${language}`
        try {
            const response = await axios.get(url);
            console.log("Credits:", response.data)
            dispatch(setCast(response.data.cast));
            dispatch(setCrew(response.data.crew));
        } catch (error) {
            dispatch(setError(error));
        }
    };
