import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from '@/slice/MovieSlice'

const store: any = configureStore({
    reducer:{
        MovieReducer
    }
});

export default store;