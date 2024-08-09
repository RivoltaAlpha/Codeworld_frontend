import React from 'react';

const ProjectCard: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded shadow">
      <div>Project Card</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View</button>
    </div>
  );
};

export default ProjectCard;
