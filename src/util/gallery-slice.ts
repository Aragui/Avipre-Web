import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface GalleryState{
    index: number;
    images: string[];
}

const initialState: GalleryState = {
    index: 0,
    images: []
}

export const gallerySlice = createSlice({
    name: 'Gallery',
    initialState,
    reducers: {
        setIndex: (state, action: PayloadAction<number>) => {
            state.index = action.payload;
        },
        incrementIndex: (state) => {
            state.index = state.index === (state.images.length - 1) ? 0 : ++state.index;
        },
        decrementIndex: (state) => {
            state.index =  state.index === 0 ? state.images.length : --state.index;
        }
    }
});

export const {decrementIndex, incrementIndex, setIndex} = gallerySlice.actions;

export default gallerySlice.reducer;