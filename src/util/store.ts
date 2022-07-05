import {combineReducers, configureStore} from '@reduxjs/toolkit';
import galleryReducer from '../util/gallery-slice';
import projectsReducer from '../util/projects-slice';

const reducers = combineReducers({
    gallery: galleryReducer,
    projects: projectsReducer
});

export const store = configureStore({
    reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;