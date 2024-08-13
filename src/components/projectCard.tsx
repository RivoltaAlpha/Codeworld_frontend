import React from 'react';
import projectsApi from '../features/projects/projectsAPI';
import { Project } from '../types/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { data: projects, isLoading, isError } = projectsApi.useGetUserProjectsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

    // component implementation
  return (
    <div>
      {projects?.map((project) => (
        <div key={project.project_id}>
          <h3 className="text-xl font-bold">{project.project_name}</h3>
          <p className="text-gray-600">{project.description}</p>
          <p><strong>GitHub Repo:</strong> 
          <a href={project.githubRepo ?? ''}>{project.githubRepo}</a></p>
          <p><strong>Start Date:</strong> {project.start_date}</p>
          <p><strong>End Date:</strong> {project.end_date}</p>
          <p><strong>Status:</strong> {project.project_status}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;