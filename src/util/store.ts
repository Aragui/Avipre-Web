import {configureStore} from '@reduxjs/toolkit';
import galleryReducer from '../util/gallery-slice';

export const store = configureStore({
    reducer: galleryReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;