import { configureStore } from '@reduxjs/toolkit';
import AuthSliceReducer from './Slices/AuthSlice';

const store = configureStore ({
    reducers : {
        auth : AuthSliceReducer
    },
    devTools : true
});

export default store;
