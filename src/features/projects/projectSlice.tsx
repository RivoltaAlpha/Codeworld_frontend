// features/projects/projectsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../types/types';

interface ProjectsState {
  selectedProject: Project | null;
}

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
  },
});

export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;