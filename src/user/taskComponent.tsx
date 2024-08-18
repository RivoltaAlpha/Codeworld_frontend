import React from 'react';
import { Task } from '../types/types';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={task.completed}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className={task.completed ? 'line-through text-gray-500' : ''}>
        {task.task_name}
      </span>
      <div className="ml-auto flex space-x-2">
        <button className="text-gray-600">Edit</button>
        <button className="text-gray-600">Calendar</button>
        <button className="text-gray-600">Comment</button>
      </div>
    </li>
  );
};

export default TaskItem;