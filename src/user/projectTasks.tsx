import React from 'react';
import tasksAPI from '../features/tasks/tasksAPI';
import TaskItem from '../user/taskComponent';

const TaskList: React.FC = () => {
  const { data: tasks, isLoading, isError } = tasksAPI.useGetTasksQuery();

  if (isLoading) return <div>Loading tasks...</div>;
  if (isError) return <div>Error loading tasks</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Today</h2>
        <div className="flex space-x-2">
          <button className="text-gray-600">Share</button>
          <button className="text-gray-600">Sorted by priority</button>
          <button className="text-gray-600">...</button>
        </div>
      </div>
      <ul className="space-y-2">
        {tasks?.map((task) => (
          <TaskItem key={task.task_id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;