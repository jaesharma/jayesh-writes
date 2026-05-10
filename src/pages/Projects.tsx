import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A curated selection of things I've built.
        </p>
      </div>

      <div className="space-y-12 mt-8">
        <div>
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="text-xl font-bold">
              <a href="#" className="border-b border-transparent hover:border-gray-800 dark:hover:border-gray-200 transition-colors">Non-Caffeinated Musings</a>
            </h2>
            <span className="text-sm border border-gray-300 dark:border-gray-700 px-1">
              Live
            </span>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl">
            A custom-built personal platform for writing and showcasing work. Built with React, TypeScript, and Tailwind CSS with a focus on typography and minimalist interactions.
          </p>
        </div>

        <div>
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="text-xl font-bold">
              Coming Soon
            </h2>
            <span className="text-sm border border-gray-300 dark:border-gray-700 px-1 text-gray-500">
              Building
            </span>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl">
            Working on something exciting. Stay tuned for updates in the Journal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;