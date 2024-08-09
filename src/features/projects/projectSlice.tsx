// features/projects/projectsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectsState } from '../../types/types';



const initialState: ProjectsState = {
  selectedProject: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<Project | null>) => {
      state.selectedProject = action.payload;
    },
    updateSelectedProject (state, action: PayloadAction<Project>) {
      state.selectedProject = action.payload;
    },
    clearSelectedProject (state) {
      state.selectedProject = null;
    }
  },
});

export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;