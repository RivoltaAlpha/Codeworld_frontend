import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { MdOutlineManageHistory } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';

const Main: React.FC = () => {
  return (
    <div className="py-12 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-4">
          Code World is a platform designed to help individuals and teams organize and track their coding projects. 
          Whether you're working on a personal project or collaborating with a team, Code World provides the tools 
          you need to manage your work efficiently.
        </p>
        <h2 className="text-4xl font-bold mb-8">Why Code World?</h2>
        <p className="mb-4">
          Our platform offers a range of features to support your coding journey:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mb-10">
        <div className='flex flex-col items-center justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <FaLaptopCode 
            className='text-6xl'
            />
            <p>Project Management</p>
        </div>
        <div className='flex flex-col items-center  justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <RiTeamFill    
             className='text-6xl' />
            <p>Team Collaboration</p>
        </div>
        <div className='flex flex-col items-center justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <GiProgression 
             className='text-6xl' />
            <p>Progress Tracking</p>
        </div>
        <div className='flex flex-col items-center justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <MdOutlineManageHistory             
            className='text-6xl' />
            <p>Resource Management</p>
        </div>
        </div>
        {/* <ul className="list-disc pl-5 mb-4">
          <li>Project Management: Create and manage your projects with ease.</li>
          <li>Team Collaboration: Work with your team and keep everyone on the same page.</li>
          <li>Progress Tracking: Track your progress and stay motivated.</li>
          <li>Resource Management: Organize your resources and keep everything in one place.</li>
        </ul> */}
        <p>
          Join Code World today and take the first step towards more organized and efficient project management. 
          Whether you're a solo developer or part of a large team, Code World has something for everyone.
        </p>
      </div>
    </div>
  );
};

export default Main;


