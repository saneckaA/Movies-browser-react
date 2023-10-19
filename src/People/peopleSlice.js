import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
    loading: false,
    error: null,
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
      setPeople: (state, action) => {
        state.people = action.payload;
        console.log('Fetching people  started:', JSON.stringify(state, null, 2));
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
    setPeople,
    setLoading, 
    setError,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPeople = state => selectPeopleState(state).people;
export const selectPeopleLoading = state => selectPeopleState(state).loading;
export const selectPeopleError = state => selectPeopleState(state).error;

export default peopleSlice.reducer;

