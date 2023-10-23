import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 'en-US',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const {
    setLanguage, 
} = languageSlice.actions;

const selectLanguageState = state => state.language;

export const selectLanguage = state => selectLanguageState(state).language;

export default languageSlice.reducer;
