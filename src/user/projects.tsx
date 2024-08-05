// components/UserProjectsList.tsx
import React from 'react';
import projectsApi from '../features/projects/projectsAPI';
import { Link } from 'react-router-dom';
import { Project } from '../types/types';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-xl font-semibold">{project.project_name}</h3>
      <p>{project.description}</p>
      <p>Status: {project.project_status}</p>
      <Link to={`/projects/${project.projects_id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

const UserProjectsList: React.FC = () => {
  const { data: projects, isLoading, isError } = projectsApi.useGetUserProjectsQuery();

  if (isLoading) return <div>Loading projects...</div>;
  if (isError) return <div>Error loading projects</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Projects</h2>
      {projects?.map((project) => (
        <ProjectItem key={project.projects_id} project={project} />
      ))}
    </div>
  );
};

export default UserProjectsList;
