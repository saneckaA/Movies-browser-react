import axios from "axios";
import { setCast, setCrew, setError, setLoading, setPerson } from "./personSlice";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";

export const fetchPerson = (personId, language) => async (dispatch) => {
    const url = `${apiUrl}person/${personId}?api_key=${apiKey}&language=${language}`;
    dispatch(setLoading(true));
    try {
        const response = await axios.get(url);
        console.log("Person details:", response.data);
        dispatch(setPerson(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false));
    }
};

export const fetchCredits = (personId, language) => async (dispatch) => {
    const url = `${apiUrl}person/${personId}/movie_credits?api_key=${apiKey}&language=${language}`
    dispatch(setLoading(true));
    try {
        const response = await axios.get(url);
        console.log("Credits person:", response.data)
        dispatch(setCast(response.data.cast));
        dispatch(setCrew(response.data.crew));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
    }
};