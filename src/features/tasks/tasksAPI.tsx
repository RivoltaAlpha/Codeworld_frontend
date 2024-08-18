import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProjectTasks, Task } from '../../types/types';

export const tasksAPI = createApi({
  reducerPath: 'tasksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),

  tagTypes: ['Tasks', 'Task'],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'tasks',
      providesTags: ['Tasks'],
    }),

    getTask: builder.query<Task, number>({
      query: (task_id) => `task/${task_id}`,
    }),

    createTask: builder.mutation<Task, Partial<Task>>({
      query: (newTask) => ({
        url: 'create-task',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['Tasks', 'Task'],
    }),

    updateTask: builder.mutation<Task, { task_id: number; data: Partial<Task> }>({
      query: ({ task_id, data }: { task_id: number; data: Partial<Task> }) => ({
        url: `update-task/${task_id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    }),

    deleteTask: builder.mutation<{ success: boolean; task_id: number }, number>({
      query: (task_id) => ({
        url: `delete-task/${task_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),

    getTasksByProjectId: builder.query<ProjectTasks[], number>({
      query: (projectId) => `/tasks-project/${projectId}`,
      providesTags: ['Tasks'],}),

    getTasksByUserId: builder.query<Task[], number>({
      query: (userId) => `/user-tasks/${userId}`,
      providesTags: ['Tasks'],
    }),
    updateTaskStatus: builder.mutation <Task, { task_id: number; data: Partial<Task> }>({
      query: ({ task_id, data }: { task_id: number; data: Partial<Task> }) => ({
        url: `update-task-status/${task_id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    })
  }),
});

export default tasksAPI;
