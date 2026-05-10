import React from 'react';

const Daily: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Journal</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Daily logs, quick thoughts, and progress updates.
        </p>
      </div>

      <div className="space-y-12 mt-8">
        <div>
          <time className="text-sm font-bold block mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
            May 10, 2026
          </time>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Deployed the new theme system today. The transition to a more structured Indigo/Slate palette feels much more personal. Added smooth animations and improved the mobile experience.
          </p>
        </div>

        <div>
          <time className="text-sm font-bold block mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
            May 09, 2026
          </time>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Started mapping out the content strategy for the blog. Want to focus on technical architecture and minimalist design principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daily;