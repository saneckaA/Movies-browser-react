import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkThemeEnabled: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkThemeEnabled = !state.isDarkThemeEnabled
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
const selectThemeState = state => state.theme;

export const selectIsDark = state => selectThemeState(state).isDarkThemeEnabled;

export default themeSlice.reducer;

