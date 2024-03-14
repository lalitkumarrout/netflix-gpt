import { createSlice } from "@reduxjs/toolkit";

const moviesSlice =createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addTrailervideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailervideo}=moviesSlice.actions;

export default moviesSlice.reducer;