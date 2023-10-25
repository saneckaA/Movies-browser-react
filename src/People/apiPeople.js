import axios from "axios";
import { setError, setLoading, setPeople, setTotalPages, setTotalResults } from "./peopleSlice";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";

export const fetchPeople = async (dispatch, pageQuery, searchQuery) => {
    const url = `${apiUrl}${searchQuery ? "search/person" : "person/popular"}?api_key=${apiKey}&page=${pageQuery}&query=${searchQuery}`;
    dispatch(setLoading(true));
    try {
        const response = await axios.get(url);
        console.log(response.data.results);
        dispatch(setPeople(response.data.results));
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 500);
        dispatch(setTotalPages(response.data.total_pages));
        dispatch(setTotalResults(response.data.total_results));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false));
    }
};
