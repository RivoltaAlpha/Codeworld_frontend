import React from 'react';

const Main: React.FC = () => {
  return (
    <div className="py-12 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-4">About Code World</h2>
        <p className="mb-4">
          Code World is a platform designed to help individuals and teams organize and track their coding projects. 
          Whether you're working on a personal project or collaborating with a team, Code World provides the tools 
          you need to manage your work efficiently.
        </p>
        <p className="mb-4">
          Our platform offers a range of features to support your coding journey:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Project Management: Create and manage your projects with ease.</li>
          <li>Team Collaboration: Work with your team and keep everyone on the same page.</li>
          <li>Progress Tracking: Track your progress and stay motivated.</li>
          <li>Resource Management: Organize your resources and keep everything in one place.</li>
        </ul>
        <p>
          Join Code World today and take the first step towards more organized and efficient project management. 
          Whether you're a solo developer or part of a large team, Code World has something for everyone.
        </p>
      </div>
    </div>
  );
};

export default Main;
