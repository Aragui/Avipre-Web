import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface GalleryState{
    index: number;
    show: boolean;
}

const initialState: GalleryState = {
    index: 0,
    show: false
}

export const gallerySlice = createSlice({
    name: 'Gallery',
    initialState,
    reducers: {
        setIndex: (state, action: PayloadAction<number>) => {
            state.index = action.payload;
        },
        incrementIndex: (state, action: PayloadAction<number>) => {
            state.index = state.index === (action.payload - 1) ? 0 : ++state.index;
        },
        decrementIndex: (state, action: PayloadAction<number>) => {
            state.index =  state.index === 0 ? (action.payload - 1) : --state.index;
        },
        setShow: (state) => {
            state.show = !state.show;
            if(state.show){
                document.body.classList.add('stop-scrolling');
            }else{
                document.body.classList.remove('stop-scrolling');
            }
        }
    }
});

export const {decrementIndex, incrementIndex, setIndex, setShow} = gallerySlice.actions;

export default gallerySlice.reducer;