import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    person: [],
    cast: [],
    crew: [],
    status: false,
    error: null,
};

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setPerson: (state) => {
            state.loading = "loading";
            state.error = null;
            console.log('Fetching person details started:', JSON.stringify(state, null, 2));
        },
        setPersonSuccess: (state, action) => {
            state.person = action.payload;
            state.status = "success";
            state.error = null;
            console.log('Fetching person details succes:', JSON.stringify(state, null, 2))
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
    setPerson,
    setPersonSuccess,
    setCast,
    setCrew,
    setError,
    setNoResult
} = personSlice.actions;

const selectPersonState = state => state.person;

export const selectPersonDetails = state => selectPersonState(state).person;
export const selectCast = state => selectPersonState(state).cast;
export const selectCastLength = state => selectPersonState(state).cast.length;
export const selectCrew = state => selectPersonState(state).crew;
export const selectCrewLength = state => selectPersonState(state).crew.length;
export const selectPersonStatus = state => selectPersonState(state).status;
export const selectPersonError = state => selectPersonState(state).error;

export default personSlice.reducer;
