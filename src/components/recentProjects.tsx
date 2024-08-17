import React from 'react';
import ProjectCard from './projectCard'; 

const RecentProjects: React.FC = () => {
  return (
    <div className="w-full text-white rounded shadow p-4 space-y-4">
      <h2 className="text-lg font-bold">Recent Projects</h2>
      {/* Map through recent projects and render ProjectCard for each */}
      <ProjectCard />
    </div>
  );
};

export default RecentProjects;
