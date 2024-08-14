import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsApi from '../features/projects/projectsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setSelectedProject, clearSelectedProject } from '../features/projects/projectSlice';
import { Project } from '../types/types';


const UpdateProjectForm: React.FC = () => {
  const { projectId }: number = useSelector((state: RootState) => state.project.selectedProject?.project_id);
  const { data: project, isLoading: isProjectLoading } = projectsApi.useGetProjectQuery(projectId);
  const [updateProject, { isLoading: isUpdating }] = projectsApi.useUpdateProjectMutation();
  const storedProject = localStorage.getItem('selectedProject');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedProject = JSON.parse(localStorage.getItem('selectedProject') || '{}');
    setFormData(storedProject);
    dispatch(setSelectedProject(storedProject))
  }, [dispatch]);

  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    githubRepo: '' ,
    start_date: '',
    end_date: '' ,
    project_status: 'todo' || 'in_progress' || 'completed',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data on Change:', formData); // Log form data on change
    try {
      const ProjectUpdate = JSON.parse(storedProject || '{}');
      const data: Partial<Project> = {
        ...formData,
        project_status: formData.project_status as "completed" | "todo" | "in_progress",
      };
      await updateProject({ projects_id: ProjectUpdate.projects_id, data }).unwrap();
      console.log('API response:', project);
      dispatch(clearSelectedProject());
      navigate('/users/dashboard');
    } catch (error) {
      console.error('Failed to update project:', error);
      // Optionally handle the error by showing an error message
    }
  };
  if (isProjectLoading) return <div>Loading project...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Update Project</h2>
      <input
        type="text"
        name="project_name"
        value={formData.project_name}
        onChange={handleChange}
        placeholder="Project Name"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="githubRepo"
        value={formData.githubRepo}
        onChange={handleChange}
        placeholder="GitHub Repo URL"
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="end_date"
        value={formData.end_date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="project_status"
        value={formData.project_status}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="todo">To Do</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button
        type="submit"
        disabled={isUpdating}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
      >
        {isUpdating ? 'Updating...' : 'Update Project'}
      </button>
    </form>
  );
};

export default UpdateProjectForm;
