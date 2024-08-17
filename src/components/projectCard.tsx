import React from 'react';
import { SyncLoader } from 'react-spinners'; // Loader for loading state
import projectsApi from '../features/projects/projectsAPI';
import { Project, TUser } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { setSelectedProject } from '../features/projects/projectSlice';
import { NavLink } from 'react-router-dom';

const ProjectCard: React.FC<{ project: Project }> = () => {
  const user = useSelector((state: RootState) => state.userAuth.user) as TUser;
  const userId = user?.user_id;
  const { data: projects, isLoading, isError } = projectsApi.useGetUserProjectsQuery(userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Loading state with spinner
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <SyncLoader color="#36d7b7" size={20} />
      </div>
    );

  // Error state
  if (isError)
    return (
      <div className="text-red-500 text-center mt-8">Error loading projects</div>
    );

  const handleViewDetails = (project: Project) => {
    dispatch(setSelectedProject(project));
    localStorage.setItem('selectedProject', JSON.stringify(project));
    navigate(`/users/project-details/${project.project_id}`);
  };

  return (
    <div className="p-6 space-y-6">
      {projects?.map((project) => (
        <div
          key={project.project_id}
          className="bg-primary shadow-lg rounded-lg p-6 transition transform hover:scale-105 duration-300 ease-in-out"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {project.project_name}
          </h3>
          <p className="text-gray-900 mb-4">
            <strong>Description:</strong> {project.description}
          </p>
          <p className="text-gray-900 mb-1">
            <strong>GitHub Repo:</strong>{' '}
            <a
              href={project.githubRepo ?? ''}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubRepo}
            </a>
          </p>
          <p className="text-gray-900 mb-1">
            <strong>Start Date:</strong> {project.start_date}
          </p>
          <p className="text-gray-900 mb-1">
            <strong>End Date:</strong> {project.end_date}
          </p>
          <p className="text-gray-900 mb-4">
            <strong>Status:</strong> {project.project_status}
          </p>
          <div className="flex space-x-3">
            <NavLink
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300"
              onClick={() => handleViewDetails(project)}
              to={`/users/project-details/${project?.project_id}`}
            >
              View Details
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
