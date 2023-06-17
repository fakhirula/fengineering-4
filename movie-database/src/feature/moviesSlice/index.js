import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// Create Slice
const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovies(state, action) {
            state.movies.push(action.payload);
        },
    }
});

// Generate Action and Reducer
const { addMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export { addMovies };
export default moviesReducer;