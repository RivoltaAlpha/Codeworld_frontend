import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => 'tasks',
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: 'tasks',
        method: 'POST',
        body: task,
      }),
    }),
    deleteTask: builder.mutation({
      query: (task_id) => ({
        url: `tasks/${task_id}`,
        method: 'DELETE',
      }),
    }),
    updateTask: builder.mutation({
      query: ({ task_id, ...task }) => ({
        url: `tasks/${task_id}`,
        method: 'PUT',
        body: task,
      }),
    }),
    updateTaskStatus: builder.mutation({
      query: ({ task_id, status }) => ({
        url: `tasks/${task_id}/status`,
        method: 'PUT',
        body: { status },
      }),
    }),
  }),
});

export default tasksApi;
