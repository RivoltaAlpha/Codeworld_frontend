import React from 'react';
import backgroundImage from '../assets/hero.jpg';

const Hero: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 text-white px-4">
        <h1 className="text-8xl font-bold mb-8">Welcome to Code World</h1>
        <p className="max-w-2xl ml-auto mr-auto font-semibold text-xl mb-8">
          Join us and start learning code today!
          An easier way to organise and track your projects & collaborate with your team as well as personal progress.
        </p>
        <a 
          href="#" 
          className="bg-teal-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
