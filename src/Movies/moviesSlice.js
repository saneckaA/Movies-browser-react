import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    loading: false,
    error: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setMovies: (state, action) => {
        state.movies = action.payload;
        console.log('Fetching movies  started:', JSON.stringify(state, null, 2));
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
    },
});

export const { 
    setMovies,
    setLoading, 
    setError,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectMoviesLoading = state => selectMoviesState(state).loading;
export const selectMoviesError = state => selectMoviesState(state).error;

export default moviesSlice.reducer;

