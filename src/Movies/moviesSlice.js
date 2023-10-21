import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    totalPages: 1,
    searchQuery: '',
    totalResults: 1,
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
      setTotalPages: (state, action) => {
        state.totalPages = action.payload;
      },
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },
      setTotalResults: (state, action) => {
        state.totalResults = action.payload;
      },
    },
});

export const { 
    setMovies,
    setLoading, 
    setError,
    setTotalPages,
    setPage,
    setSearchQuery,
    setTotalResults,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectMoviesLoading = state => selectMoviesState(state).loading;
export const selectMoviesError = state => selectMoviesState(state).error;
export const selectMoviesTotalPages = state => selectMoviesState(state).totalPages;
export const selectMoviesTotalResults = state => selectMoviesState(state).totalResults;

export const selectMoviesByQuery = (state, searchQuery) => {
  const movies = selectMovies(state);
  if (!searchQuery || searchQuery.trim() === "") {
    return movies;
  }
  
  return movies.filter(movie => movie.title.toUpperCase().includes(searchQuery.trim().toUpperCase()));
}

export default moviesSlice.reducer;

