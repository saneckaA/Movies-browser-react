import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    genres: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setMovies: (state, action) => {
        state.movies = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      setGenres: (state, action) => {
        state.genres = action.payload;
      }
    },
});

export const { 
    setMovies,
    setLoading, 
    setError,
    setGenres
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectMoviesLoading = state => selectMoviesState(state).loading;
export const selectMoviesError = state => selectMoviesState(state).error;
export const selectGenres = state => selectMoviesState(state).genres;

export default moviesSlice.reducer;

