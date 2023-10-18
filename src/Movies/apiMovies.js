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

export const fetchGenres = async () => {
    const url = `${apiUrl}genre/movie/list?api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log(response.data.genres);
        return response.data.genres;
    } catch (error) {
        console.error("Problem with fetching genres data", error)
    }
};

useEffect(() => {
    fetchMovies();
    fetchGenres();
}, []);

