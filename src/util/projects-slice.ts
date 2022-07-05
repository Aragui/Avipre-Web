import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { Project } from '../domain/models/project';

export interface ProjectsState{
    page: number;
    list: Project[];
    currPageList: Project[];
}

const initialState: ProjectsState = {
    page: 1,
    currPageList: [],
    list: []
};

export const projectsSlice = createSlice({
    name: 'Projects',
    initialState: initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            const maxPage = Math.round(state.list.length / 8);
            if(action.payload == 0){
                state.page = maxPage;
            }else if(action.payload == maxPage + 1){
                state.page = 1;
            }else{
                state.page = action.payload;
            }

            const index = (state.page - 1) * 8;

            const lastIndex = index + 8

            const list = state.list.sort((a, b) => b.year - a.year).slice(index, lastIndex)

            state.currPageList = list;
            
        },
        setList: (state, action: PayloadAction<Project[]>) => {
            state.list = action.payload;
            state.currPageList = state.list.slice(0, 8);
        }
    }
});

export const {setList, setPage} = projectsSlice.actions;

export default projectsSlice.reducer;