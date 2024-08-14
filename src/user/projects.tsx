import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'sonner';
import { SyncLoader } from 'react-spinners';
import { RootState } from '../app/store';
import projectsApi from '../features/projects/projectsAPI';
import { setSelectedProject } from '../features/projects/projectSlice';
import ProjectCard from '../components/projectCard';
import { Project } from '../types/types';

const UserProjectsList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userAuth.user?.user_id && state.userAuth);
  const userId = user?.user_id;

  const { data: projects, isLoading, isError } = projectsApi.useGetUserProjectsQuery(userId);
  console.log(projects);

  const [deleteProject] = projectsApi.useDeleteProjectMutation();

  const handleDelete = async (id: number) => {
    try {
      await deleteProject(id).unwrap();
      toast.success('Project deleted successfully');
    } catch (error) {
      toast.error('Error deleting project');
    }
  };

  const handleViewDetails = (project: Project) => {
    dispatch(setSelectedProject(project));
    localStorage.setItem('selectedProject', JSON.stringify(project));
    navigate(`/users/project-details/${project.project_id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading projects</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Projects</h2>
      {projects?.map((project) => (
        <div key={project?.project_id}>
          <ProjectCard project={project} />
          <div className="mt-2">
            <NavLink
              className="btn px-6 py-3 bg-teal-400 btn-sm rounded btn-outline btn-success"
              onClick={() => handleViewDetails(project)}
              to={`/users/project-details/${project?.project_id}`}
            >
              View Details
            </NavLink>
            <button
              className="btn px-6 py-3 bg-red-500 btn-sm rounded btn-outline btn-error ml-2"
              onClick={() => handleDelete(project.project_id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-center">
          <SyncLoader
            color="#36d7b7"
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {isError && <div className="text-red-500">Error loading projects</div>}
    </div>
  );
};

export default UserProjectsList;
