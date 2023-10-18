import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "75950885b0db888f999efec40cdae6e8";

export const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = async () => {

    const url = `${apiUrl}movie/popular?api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.error("Problem with fetching movies data", error)
    }
};

export const useGenres = () => {
    const [genres, setGenres] = useState([]);
    const [isLoadingGen, setIsLoadingGen] = useState(true);
    const [isErrorGen, setIsErrorGen] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            const url = `${apiUrl}genre/movie/list?api_key=${apiKey}`;
        
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

    return {genres, isLoadingGen, isErrorGen}
};


