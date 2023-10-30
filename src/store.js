import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './Movies/moviesSlice';
import movieReducer from './MovieDetail/movieSlice';
import peopleReducer from './People/peopleSlice';
import personReducer from './PersonDetail/personSlice';
import languageReducer from './LanguageSelect/languageSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        people: peopleReducer,
        person: personReducer,
        language: languageReducer,
    },
});

export default store;