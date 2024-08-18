import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'sonner';
import { SyncLoader } from 'react-spinners';
import { RootState } from '../app/store';
import projectsApi from '../features/projects/projectsAPI';
import { setSelectedProject } from '../features/projects/projectSlice';
import Sidebar from '../components/sideBar';
import { Project, TUser } from '../types/types';

const UserProjectsList: React.FC = () => {
  const user = useSelector((state: RootState) => state.userAuth.user) as TUser;
  const userId = user?.user_id;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: projects, isLoading, isError } = projectsApi.useGetUserProjectsQuery(userId);
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
    if (project.projects_id) {
      dispatch(setSelectedProject(project));
      navigate(`/project-details/${project.projects_id}`);
      console.log('Project ID:', project.projects_id);
    } else {
      toast.error('Project ID not found');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 p-8 space-y-8 text-white ">
        <h2 className="text-3xl font-bold mb-4">Your Projects</h2>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <SyncLoader color="#36d7b7" size={20} />
          </div>
        )}

        {isError && <div className="text-red-500 text-lg">Error loading projects</div>}

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects?.map((project, index) => (
            <div key={project?.projects_id || index} className="bg-secondary text-white p-6 rounded-lg transition transform hover:scale-105 duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">{project?.project_name}</h3>
              <p className="text mb-4"><strong>Description :</strong> {project.description}</p>
              <p className="text-sm mb-2">
                <strong>GitHub Repo:</strong> <a href={project.githubRepo ?? ''} className="text-blue-500 hover:underline">{project.githubRepo}</a>
              </p>
              <p className="text-sm mb-2"><strong>Start Date:</strong> {project.start_date}</p>
              <p className="text-sm mb-2"><strong>End Date:</strong> {project.end_date}</p>
              <p className="text-sm mb-2"><strong>Status:</strong> {project.project_status}</p>

              <div className="mt-4 flex justify-between items-center">
                <NavLink
                  className="bg-primary text-black py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
                  onClick={() => handleViewDetails(project)}
                  to={`/project-details/${project?.projects_id}`}>
                  View Details
                </NavLink>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(project.projects_id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {!isLoading && !isError && projects?.length === 0 && (
          <div className="text-gray-600 text-lg">No projects found.</div>
        )}
      </div>
    </div>
  );
};

export default UserProjectsList;
