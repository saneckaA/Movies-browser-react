import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../Movies/moviesSlice';
import movieReducer from './movieSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
    },
});

export default store;