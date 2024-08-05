// features/projects/projectsAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Project } from '../../types/types';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    getUserProjects: builder.query<Project[], void>({
      query: () => 'projects',
      providesTags: ['Project'],
    }),
    getProject: builder.query<Project, string>({
      query: (id) => `projects/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Project', id }],
    }),
    createProject: builder.mutation<Project, Partial<Project>>({
      query: (newProject) => ({
        url: 'projects',
        method: 'POST',
        body: newProject,
      }),
      invalidatesTags: ['Project'],
    }),
    updateProject: builder.mutation<Project, Partial<Project> & Pick<Project, 'projects_id'>>({
      query: ({ projects_id, ...patch }) => ({
        url: `projects/${projects_id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { projects_id }) => [{ type: 'Project', id: projects_id }],
    }),
    deleteProject: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `projects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),
  }),
});

export default projectsApi;

