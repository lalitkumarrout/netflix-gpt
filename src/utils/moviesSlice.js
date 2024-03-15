import { createSlice } from "@reduxjs/toolkit";

const moviesSlice =createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        PopularMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrailervideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTrailervideo}=moviesSlice.actions;

export default moviesSlice.reducer;