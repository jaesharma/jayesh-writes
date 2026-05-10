import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold leading-tight">
        Building digital tools with intent.
      </h1>
      
      <p className="text-lg leading-relaxed max-w-2xl">
        I'm Jayesh, a developer focused on creating clean, functional, and meaningful software. This is where I document my builds and share what I've learned along the way.
      </p>

      <div className="flex gap-6 pt-4">
        <Link 
          to="/projects" 
          className="font-medium text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 transition-colors pb-0.5"
        >
          View Projects
        </Link>
        <span className="text-gray-400">|</span>
        <Link 
          to="/about" 
          className="font-medium text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 transition-colors pb-0.5"
        >
          About Me
        </Link>
      </div>

      <div className="mt-16 space-y-8 border-t border-gray-300 dark:border-gray-700 pt-8">
        <h2 className="text-xl font-bold">Currently</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Non-Caffeinated Musings</h3>
            <p className="text-gray-700 dark:text-gray-300">My personal journal and portfolio platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
