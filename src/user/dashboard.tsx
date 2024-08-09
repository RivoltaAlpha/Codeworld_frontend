import React from 'react';
import Sidebar from '../components/sideBar'; 
import GraphSection from '../components/graphSection'; 
import RecentProjects from '../components/recentProjects'; 
import Header from '../components/header';

const Dashboard: React.FC = () => {
  return (
    <>
     < Header />
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <GraphSection />
        <RecentProjects />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
