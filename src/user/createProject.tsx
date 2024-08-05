// components/CreateProjectForm.tsx
import React, { useState } from 'react';
import projectsApi from '../features/projects/projectsAPI';

const CreateProjectForm: React.FC = () => {
  const [createProject, { isLoading }] = projectsApi.useCreateProjectMutation();
  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    githubRepo: '',
    start_date: '',
    end_date: '',
    project_status: 'todo',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject(formData).unwrap();
      // Reset form or redirect
    } catch (error) {
      console.error('Failed to create project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Create New Project</h2>
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
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? 'Creating...' : 'Create Project'}
      </button>
    </form>
  );
};

export default CreateProjectForm;