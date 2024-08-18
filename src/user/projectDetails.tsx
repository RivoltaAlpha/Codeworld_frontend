import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import {  NavLink } from 'react-router-dom';
import { Project,  TUser } from '../types/types';
import tasksAPI from '../features/tasks/tasksAPI';
import { clearSelectedProject } from '../features/projects/projectSlice';

const ProjectDetails: React.FC = () => {
  const selectedProject = useSelector((state: RootState) => state.project.selectedProject) as Project;
  const user = useSelector((state: RootState) => state.userAuth.user) as TUser;
  const userId = user?.user_id;

  console.log('Selected project', selectedProject)
  const project_id = selectedProject?.projects_id;
  const { data: tasks } = tasksAPI.useGetTasksByProjectIdQuery(project_id);
  console.log('Task data:', tasks);
  const dispatch = useDispatch();

  
    if (!selectedProject) {
      return <div>No project selected.</div>;
    }

  return (
    <div className="space-y-4 p-4 m-[50px]">
      <h2 className="text-2xl font-bold">{selectedProject.project_name}</h2>
      <p>{selectedProject.description}</p>
      <div className="flex space-x-2">
        <span className="font-semibold">Start Date:</span>
        <span>{selectedProject.start_date ? selectedProject.start_date : 'N/A'}</span>
      </div>
      <div className="flex space-x-2">
        <span className="font-semibold">End Date:</span>
        <span>{selectedProject.end_date ? selectedProject.end_date : 'N/A'}</span>
      </div>
      <div className="flex space-x-2">
        <span className="font-semibold">Status:</span>
        <span>{selectedProject.project_status}</span>
      </div>
      {selectedProject.githubRepo && (
        <div className="flex space-x-2">
          <span className="font-semibold">GitHub Repo:</span>
          <a href={selectedProject.githubRepo} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {selectedProject.githubRepo}
          </a>
        </div>
      )}

      <ul className="space-y-2 mb-6 p-4 gap-6">
      <h3 className="text-xl font-semibold mt-6">Tasks</h3>
        {tasks?.map((task) => (
          <li key={task.task_id} className="flex flex-col bg-gray-800 p-4 rounded  items-center space-x-2">
            <span>Task Name: {task.task_name}</span>
            <span>About: {task.description}</span>
            <span className={`ml-auto ${task.completed ? 'text-green-500' : 'text-red-500'}`}>
              Status: {task.task_status}
            </span>
          </li>
        ))}
      </ul>
      <div className='flex justify-between'>
      <NavLink to={`/projects/${userId}`}>
                <button className="px-4 py-2 bg-primary text-black rounded" onClick={() => dispatch(clearSelectedProject())}>Back</button>
      </NavLink>
      <NavLink to={`/projects/${userId}`}>
                <button className="px-4 py-2 bg-primary text-black rounded" onClick={() => dispatch(clearSelectedProject())}>New Task</button>
      </NavLink>
      </div>
    </div>
  );
};

export default ProjectDetails;
