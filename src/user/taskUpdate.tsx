import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tasksApi from '../features/tasks/tasksAPI';

const UpdateTask: React.FC = () => {
    const { taskId } = useParams<{ taskId: any }>();
    const { data: task, isLoading: isTaskLoading } = tasksApi.useGetTaskQuery(taskId);
    const [updateTask, { isLoading: isUpdating }] = tasksApi.useUpdateTaskMutation();

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setStatus(task.status);
        }
    }, [task]);

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateTask({ id: taskId, title, status }).unwrap();
            // Optionally, redirect to task list or show success message
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    if (isTaskLoading) return <div>Loading task...</div>;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Update Task</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                className="w-full p-2 border rounded"
                required
            />
            <div>
                <label htmlFor="status" className="block mb-2">Status:</label>
                <select 
                    id="status" 
                    value={status} 
                    onChange={handleStatusChange} 
                    className="w-full p-2 border rounded"
                >
                    <option value="new">New</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button
                type="submit"
                disabled={isUpdating}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
            >
                {isUpdating ? 'Updating...' : 'Update Task'}
            </button>
        </form>
    );
};

export default UpdateTask;