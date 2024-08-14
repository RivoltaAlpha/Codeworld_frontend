// features/projects/projectsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectsState } from '../../types/types';



const initialState: ProjectsState = {
  selectedProject:  JSON.parse(localStorage.getItem('selectedProject') || 'null'),
  project:  JSON.parse(localStorage.getItem('project') || 'null'),
}
const projectsSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<Project | null>) => {
      state.project = action.payload;
      localStorage.setItem('selectedProject', JSON.stringify(action.payload));
    },
    updateSelectedProject (state, action: PayloadAction<Project>) {
      state.selectedProject = action.payload;
      localStorage.setItem('selectedProject', JSON.stringify(action.payload));
    },
    clearSelectedProject (state) {
      state.selectedProject = null;
      localStorage.removeItem('selectedProject');
    }
  },
});

export const { setSelectedProject, updateSelectedProject, clearSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;