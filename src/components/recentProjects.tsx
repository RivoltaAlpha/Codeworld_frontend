import React from 'react';
import ProjectCard from './projectCard'; 

const RecentProjects: React.FC = () => {
  return (
    <div className="w-full text-white rounded shadow p-4 space-y-4">
      <h2 className="text-lg font-bold">Recent Projects</h2>
      {/* Map through recent projects and render ProjectCard for each */}
      <ProjectCard project={{ 
        projects_id: 0,
        user_id: 0,
        project_name: '',
        description: '',
        githubRepo: '',
        start_date: '',
        end_date: '',
        project_status: 'Todo' as 'Todo' | 'InProgress' | 'Done',
        created_at: '',
        updated_at: ''
       }} />
    </div>
  );
};

export default RecentProjects;
