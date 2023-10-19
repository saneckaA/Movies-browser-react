import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: [],
    cast: [],
    crew: [],
    status: false,
    error: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state) => {
            state.loading = "loading";
            state.error = null;
            console.log('Fetching movie details started:', JSON.stringify(state, null, 2));
        },
        setMovieSuccess: (state, action) => {
            state.movie = action.payload;
            state.status = "success";
            state.error = null;
            console.log('Fetching movie details succes:', JSON.stringify(state, null, 2))
        },
        setCast: (state, action) => {
            state.cast = action.payload;
        },
        setCrew: (state, action) => {
            state.crew = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.status = "fail";
        },
        setNoResult: (state) => {
            state.status = "noResult";
            state.error = null;
        },
    },
});

export const {
    setMovie,
    setMovieSuccess,
    setCast,
    setCrew,
    setError,
    setNoResult
} = movieSlice.actions;

const selectMovieState = state => state.movie;

export const selectMovieDetails = state => selectMovieState(state).movie;
export const selectCast = state => selectMovieState(state).cast;
export const selectCrew = state => selectMovieState(state).crew;
export const selectMovieStatus = state => selectMovieState(state).status;
export const selectMovieError = state => selectMovieState(state).error;

export default movieSlice.reducer;
