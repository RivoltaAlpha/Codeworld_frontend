import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from '../../types/types';

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

    updateTask: builder.mutation<Task, { id: number; data: Partial<Task> }>({
      query: ({ id, data }: { id: number; data: Partial<Task> }) => ({
        url: `update-task/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    }),

    deleteTask: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `delete-task/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),

    getTasksByProjectId: builder.query<Task[], number>({
      query: (projectId) => `tasks/project/${projectId}`,
      providesTags: ['Tasks'],
    }),

    getTasksByUserId: builder.query<Task[], number>({
      query: (userId) => `tasks/user/${userId}`,
      providesTags: ['Tasks'],
    }),
    updateTaskStatus: builder.mutation <Task, { id: number; data: Partial<Task> }>({
      query: ({ id, data }: { id: number; data: Partial<Task> }) => ({
        url: `update-task-status/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    })
  }),
});

export default tasksAPI;
