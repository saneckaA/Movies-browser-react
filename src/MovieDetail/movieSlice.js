import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: [],
    cast: [],
    crew: [],
    loading: true,
    error: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setCast: (state, action) => {
            state.cast = action.payload;
        },
        setCrew: (state, action) => {
            state.crew = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    setLoading,
    setMovie,
    setCast,
    setCrew,
    setError,
} = movieSlice.actions;

const selectMovieState = state => state.movie;

export const selectMovieDetails = state => selectMovieState(state).movie;
export const selectCast = state => selectMovieState(state).cast;
export const selectCrew = state => selectMovieState(state).crew;
export const selectMovieLoading = state => selectMovieState(state).loading;
export const selectMovieError = state => selectMovieState(state).error;

export default movieSlice.reducer;
