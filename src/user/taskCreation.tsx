import React, { useState } from 'react';
import tasksAPI from '../features/tasks/tasksAPI';

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [createTask, { isLoading }] = tasksAPI.useCreateTaskMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTask({ title }).unwrap();
      setTitle('');
      // Optionally, redirect to task list or show success message
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Create New Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isLoading ? 'Creating...' : 'Create Task'}
      </button>
    </form>
  );
};

export default CreateTask;