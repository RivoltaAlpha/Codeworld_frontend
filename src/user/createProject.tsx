import React, { useState } from 'react';
import projectsApi from '../features/projects/projectsAPI';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { Project } from '../types/types';
import Sidebar from '../components/sideBar';

const CreateProjectForm: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.userAuth);
  const [createProject, { isLoading }] = projectsApi.useCreateProjectMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: user?.user_id || 0,
    project_name: '',
    description: '',
    githubRepo: '',
    start_date: '',
    end_date: '',
    project_status: 'Todo',
  } as Project);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject(formData).unwrap();
      toast.success('Booking successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to create project:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
    <div className="max-w-2xl mx-auto mt-10 p-6 text-black tecy shadow-lg rounded-lg">
    <Toaster
        toastOptions={{
          classNames: {
            error: "bg-red-400",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
      />
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl text-white font-bold">Create New Project</h2>
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
        value={formData.githubRepo ?? ''} 
        onChange={handleChange}
        placeholder="GitHub Repo URL"
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="start_date"
        value={formData.start_date ?? ''}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="end_date"
        value={formData.end_date ?? ''}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="project_status"
        value={formData.project_status}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="Todo">To Do</option>
        <option value="InProgress">In Progress</option>
        <option value="Done">Completed</option>
      </select>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? 'Creating...' : 'Create Project'}
      </button>
    </form>
  </div>
  </div>
  );
};

export default CreateProjectForm;