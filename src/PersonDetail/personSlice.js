import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    person: [],
    cast: [],
    crew: [],
    loading: false,
    error: null,
};

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setPerson: (state, action) => {
            state.person = action.payload;
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
    setPerson,
    setLoading,
    setCast,
    setCrew,
    setError,
} = personSlice.actions;

const selectPersonState = state => state.person;

export const selectPersonDetails = state => selectPersonState(state).person;
export const selectCast = state => selectPersonState(state).cast;
export const selectCastLength = state => selectPersonState(state).cast.length;
export const selectCrew = state => selectPersonState(state).crew;
export const selectCrewLength = state => selectPersonState(state).crew.length;
export const selectPersonLoading = state => selectPersonState(state).loading;
export const selectPersonError = state => selectPersonState(state).error;

export default personSlice.reducer;
