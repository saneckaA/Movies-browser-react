import { useDispatch, useSelector } from "react-redux"
import { selectMoviesStatus } from "./moviesSlice";
import { useEffect } from "react";
import { fetchGenres, fetchMovies } from "./apiMovies";
import Error from '.Error';
import MoviesList from "./MoviesList";

const MoviesBrowser = () => {

    const dispatch = useDispatch();
    const moviesStatus = useSelector(selectMoviesStatus);

    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchGenres());
    }, [dispatch]);

    switch (moviesStatus) {
        case "initial":
            return null;

        case "loading":
            return <></>;

        case "error":
            return <Error />;
        
        case "success":
            return <MoviesList />;

        default: 
           throw new Error(`incorrect status: ${moviesStatus}`);
        
    }
   
};

export default MoviesBrowser;