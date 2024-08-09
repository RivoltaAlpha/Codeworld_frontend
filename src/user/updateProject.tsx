import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsApi from '../features/projects/projectsAPI';

const UpdateProjectForm: React.FC = () => {
  const { projectId } = useParams<{ projectId: any }>();  // Ensuring projectId is of type string
  const { data: project, isLoading: isProjectLoading } = projectsApi.useGetProjectQuery(projectId);
  const [updateProject, { isLoading: isUpdating }] = projectsApi.useUpdateProjectMutation();

  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    githubRepo: '' ,
    start_date: '',
    end_date: '' ,
    project_status: '',
  });

  useEffect(() => {
    if (project) {
      setFormData({
        project_name: project.project_name || '',
        description: project.description || '',
        githubRepo: project.githubRepo || '',
        start_date: project.start_date || '',
        end_date: project.end_date || '',
        project_status: project.project_status || '',
      });
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataWithDefaults = {
        ...formData,
        githubRepo: formData.githubRepo ?? '',
      };

      await updateProject({ id: projectId, ...formDataWithDefaults }).unwrap();
      // Add a success message or redirect logic here
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
