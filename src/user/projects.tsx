import React from 'react';
import projectsApi from '../features/projects/projectsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ProjectCard from '../components/projectCard';
import { useNavigate } from 'react-router-dom';


const UserProjectsList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bookings = data?.[0]?.bookings || []; // Access nested bookings array
  console.log(bookings);
  const { user }: any = useSelector((state: RootState) => state.userAuth.user?.user_id && state.userAuth);
  const userId = user?.user_id;
  const { data: projects, isLoading, isError } = projectsApi.useGetUserProjectsQuery(userId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading projects</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Projects</h2>
      {projects?.map((project) => (
        <ProjectCard key={project.projects_id} />
      ))}
    </div>
  );
};

export default UserProjectsList;
