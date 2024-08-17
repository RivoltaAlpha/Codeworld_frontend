// features/projects/projectsAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Project  } from '../../types/types';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    getUserProjects: builder.query<Project[], { user_id : number}>({
      query: ( user_id) => `/user-projects/${user_id}`,
      providesTags: ['Project'],
    }),
    getProject: builder.query<Project, number>({
      query: (id) => `/projects/${id}`,
      providesTags: ['Project'],
    }),
    createProject: builder.mutation<Project, Partial<Project>>({
      query: (newProject) => ({
        url: '/project',
        method: 'POST',
        body: newProject,
      }),
      invalidatesTags: ['Project'],
    }),
    updateProject: builder.mutation<Project, { projects_id: number; data: Partial<Project> }>({
      query: ({ projects_id, data }) => ({
        url: `/projects/${projects_id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { projects_id }) => [{ type: 'Project', id: projects_id }],
    }),
    deleteProject: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),
  }),
});

export default projectsApi;

