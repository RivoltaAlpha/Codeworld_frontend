import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-[200px] h-full bg-cards p-4 space-y-4">
      <nav className="flex flex-col gap-8 space-y-2">
        <Link to="/dashboard" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Dashboard</Link>
        <Link to="/projects" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Projects</Link>
        <Link to="/create-project" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Create Project</Link>
        <Link to="/tasks" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Tasks</Link>
        <Link to="/report" className="hover:underline text-white hover:bg-gray-900 rounded p-2">Report</Link>
        <Link to="/profile" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
