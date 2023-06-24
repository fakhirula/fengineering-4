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
        updateMovies(state, action) {
            state.movies = action.payload;
        }
    },
});

// Generate Action and Reducer
const { addMovies, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export { addMovies, updateMovies };
export default moviesReducer;