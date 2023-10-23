import axios from "axios";
import { setPeople } from "../People/peopleSlice";
import { setCast, setCrew, setError, setPersonSuccess } from "./personSlice";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";

export const fetchPerson = (personId, language) => async (dispatch) => {
    const url = `${apiUrl}person/${personId}?api_key=${apiKey}&language=${language}`;
    dispatch(setPeople());
        try {
            const response = await axios.get(url);
            console.log("Person details:", response.data);
            dispatch(setPersonSuccess(response.data));
        } catch (error) {
            dispatch(setError(error));
        }
    };

export const fetchCredits = (personId, language) => async (dispatch) => {
    const url = `${apiUrl}person/${personId}/movie_credits?api_key=${apiKey}&language=${language}`
        try {
            const response = await axios.get(url);
            console.log("Credits person:", response.data)
            dispatch(setCast(response.data.cast));
            dispatch(setCrew(response.data.crew));
        } catch (error) {
            dispatch(setError(error));
        }
    };