import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { MdOutlineManageHistory } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';

const Main: React.FC = () => {
  return (
    <div className="py-12 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mb-10">
          <div className='flex flex-col items-center justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <FaLaptopCode className='text-6xl' />
            <p>Project Management</p>
          </div>
          <div className='flex flex-col items-center justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <RiTeamFill className='text-6xl' />
            <p>Team Collaboration</p>
          </div>
          <div className='flex flex-col items-center justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <GiProgression className='text-6xl' />
            <p>Progress Tracking</p>
          </div>
          <div className='flex flex-col items-center justify-center border rounded p-4 w-[250px] h-[200px] bg-primary text-black translate-x-4'>
            <MdOutlineManageHistory className='text-6xl' />
            <p>Resource Management</p>
          </div>
        </div>

        <div className="my-10 text-center">
          <h2 className="text-3xl font-semibold">Why Choose Code World?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Code World offers a comprehensive suite of tools to manage your projects efficiently, collaborate seamlessly with your team, track progress, and manage resources effectively.
          </p>
          <div className="flex flex-col md:flex-row justify-around items-center mt-8">
            <div className="p-6 bg-gray-800 rounded-lg m-4">
              <h3 className="text-2xl font-semibold">Efficiency</h3>
              <p className="mt-2 text-gray-300">
                Streamline your workflows with powerful project management tools.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg m-4">
              <h3 className="text-2xl font-semibold">Collaboration</h3>
              <p className="mt-2 text-gray-300">
                Enhance teamwork with real-time collaboration features.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg m-4">
              <h3 className="text-2xl font-semibold">Tracking</h3>
              <p className="mt-2 text-gray-300">
                Monitor progress and stay on top of deadlines with ease.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg m-4">
              <h3 className="text-2xl font-semibold">Management</h3>
              <p className="mt-2 text-gray-300">
                Efficiently allocate resources and manage tasks effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-10">
          <div className="flex flex-col md:flex-row items-center">
            <img src="../public/team.png" alt="teamwork" className="w-full md:w-1/2" />
            <p className="mt-4 md:mt-0 md:ml-6">
              Collaboration is key. Work seamlessly with your team, share ideas, and track progress together with ease.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <p className="mt-4 md:mt-0 md:mr-6 lg:order-first">
              Effective communication and collaboration tools to help your team stay connected and productive.
            </p>
            <img src="../public/collaboration.png" alt="collaboration" className="w-full md:w-1/2 order-last md:order-first" />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <img src="../public/programming.png" alt="tracking" className="w-full md:w-1/2" />
            <p className="mt-4 md:mt-0 md:ml-6">
              Keep track of your progress and milestones with our powerful tracking tools, ensuring you stay on target.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <p className="mt-4 md:mt-0 md:mr-6 lg:order-first ">
              Manage your resources effectively, assign tasks, and monitor progress to optimize your workflow.
            </p>
            <img src="../public/tasks.png" alt="tasks" className="w-full bg-gray-900 md:w-1/2 order-last md:order-first" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
