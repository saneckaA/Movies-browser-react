import axios from "axios";
import { setError, setLoading, setPeople } from "./peopleSlice";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";

export const fetchPeople = async (dispatch) => {
    const url = `${apiUrl}person/popular?api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log(response.data.results);
        dispatch(setPeople(response.data.results));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false));
    }
};
