import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { SyncLoader } from 'react-spinners';
import { RootState } from '../app/store';
import tasksApi from '../features/tasks/tasksAPI';
import Sidebar from '../components/sideBar';
import { Task, TUser } from '../types/types';
import { setSelectedTask } from '../features/tasks/tasksSlice';

const UserTasksList: React.FC = () => {
  const user = useSelector((state: RootState) => state.userAuth.user) as TUser;
  const userId = user?.user_id;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: tasks, isLoading, isError } = tasksApi.useGetTasksByUserIdQuery(userId);
  const [deleteTask] = tasksApi.useDeleteTaskMutation();

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id).unwrap();
      toast.success('Task deleted successfully');
    } catch (error) {
      toast.error('Error deleting task');
    }
  };

  const handleViewDetails = (task: Task) => {
    if (task?.task_id) {
      dispatch(setSelectedTask(task));
      navigate(`/dashboard/task-details/${task.task_id}`);
      console.log('Task ID:', task.task_id);
    } else {
      toast.error('Task ID not found');
      console.error('Task ID is undefined');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 p-8 space-y-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Your Tasks</h2>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <SyncLoader color="#36d7b7" size={20} />
          </div>
        )}

        {isError && <div className="text-red-500 text-lg">Error loading tasks</div>}

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {tasks?.map((task) => (
            <div key={task.task_id} className="bg-secondary text-white p-6 rounded-lg transition transform hover:scale-105 duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">{task.task_name}</h3>
              <p className="text mb-4"><strong>Description :</strong> {task.description}</p>
              <p className="text-sm mb-2"><strong>Start Date:</strong> {task.start_date}</p>
              <p className="text-sm mb-2"><strong>End Date:</strong> {task.end_date}</p>
              <p className="text-sm mb-2"><strong>Status:</strong> {task.task_status}</p>

              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-primary text-black py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
                  onClick={() => handleViewDetails(task)}>
                  View Details
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(task?.task_id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {!isLoading && !isError && tasks?.length === 0 && (
          <div className="text-gray-600 text-lg">No tasks found.</div>
        )}
      </div>
    </div>
  );
};

export default UserTasksList;
