import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MovieInterface } from '@/interface/movieinterface'

const initialState: MovieInterface = {
    movies: [],
    isMovieConcat: false,
}

const MovieSlice = createSlice({
    name: "Movies",
    initialState,
    reducers:{
        setStateMovies: (state, data) => {
            state.movies = state.isMovieConcat ?state.movies.concat(data.payload) : data.payload;
        },
        setMovieConcataction: (state: any, data) => {
            state.isMovieConcat = data.payload;
        }
    }
});

export const { setStateMovies, setMovieConcataction } = MovieSlice.actions;
//export 
export default MovieSlice.reducer;