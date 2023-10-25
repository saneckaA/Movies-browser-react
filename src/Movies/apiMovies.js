import axios from "axios";
import { useEffect, useState } from "react";
import { setError, setLoading, setMovies, setTotalPages, setTotalResults } from "./moviesSlice";
import { useSelector } from "react-redux";
import { selectLanguage } from "../LanguageSelect/languageSlice";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";

export const fetchMovies = async (dispatch, pageQuery, searchQuery, language) => {

    let url = `${apiUrl}${searchQuery ? "search/movie" : "movie/popular"}?api_key=${apiKey}&language=${language}&page=${pageQuery}&query=${searchQuery}`;
    dispatch(setLoading(true));
    try {
        const response = await axios.get(url);
        console.log(response.data.results);
        dispatch(setMovies(response.data.results));
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 500)
        dispatch(setTotalPages(response.data.total_pages));
        dispatch(setTotalResults(response.data.total_results));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false))
    }
};

export const useGenres = () => {
    const [genres, setGenres] = useState([]);
    const [isLoadingGen, setIsLoadingGen] = useState(true);
    const [isErrorGen, setIsErrorGen] = useState(null);
    const language = useSelector(selectLanguage)

    useEffect(() => {
        const fetchGenres = async () => {
            const url = `${apiUrl}genre/movie/list?api_key=${apiKey}&language=${language}`;
            try {
                const response = await axios.get(url);
                console.log("Genres:", response.data.genres)
                if (response.data) {
                    const genresData = response.data.genres;
                    setGenres(genresData);
                    setIsLoadingGen(false);
                } else {
                    throw new Error("No data found about genres")
                }
            } catch (error) {
                setIsErrorGen(error);
                setIsLoadingGen(false);
            }
        };

        fetchGenres();
    }, []);

    return { genres, isLoadingGen, isErrorGen }
};




