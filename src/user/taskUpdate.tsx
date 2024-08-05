import React, { useState } from 'react';
import tasksAPi from '../features/tasks/tasksAPI';

const TaskStatusUpdateForm = ({ task }) => {
  const [status, setStatus] = useState(task.status);
  const [updateTaskStatus, { isLoading, isSuccess, isError, error }] = tasksAPi.useUpdateTaskStatusMutation();

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);

    // Make API call to update task status
    await updateTaskStatus({ task_id: task.task_id, status: newStatus });
  };

  return (
    <div>
      <label htmlFor="status">Status:</label>
      <select id="status" value={status} onChange={handleStatusChange} disabled={isLoading}>
        <option value="new">New</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      {isError && <p>Error: {error.message}</p>}
      {isSuccess && <p>Status updated successfully!</p>}
    </div>
  );
};

export default TaskStatusUpdateForm;
