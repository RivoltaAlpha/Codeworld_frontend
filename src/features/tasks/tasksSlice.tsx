import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../../types/types';

const initialState: TasksState = {
  selectedTask:  JSON.parse(localStorage.getItem('selectedTask') || 'null'),
  task:  JSON.parse(localStorage.getItem('Task') || 'null'),
}
const tasksSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    setSelectedTask: (state, action: PayloadAction<Task | null>) => {
      state.task = action.payload;
      localStorage.setItem('selectedTask', JSON.stringify(action.payload));
    },
    updateSelectedTask (state, action: PayloadAction<Task>) {
      state.selectedTask = action.payload;
      localStorage.setItem('selectedTask', JSON.stringify(action.payload));
    },
    clearSelectedTask (state) {
      state.selectedTask = null;
      localStorage.removeItem('selectedTask');
    }
  },
});

export const { setSelectedTask, updateSelectedTask, clearSelectedTask } = tasksSlice.actions;
export default tasksSlice.reducer;