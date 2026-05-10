import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Thoughts on engineering, design, and life.
        </p>
      </div>

      <div className="space-y-12 mt-8">
        <article>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
            <time className="text-sm text-gray-500 whitespace-nowrap">
              May 10, 2026
            </time>
            <div>
              <h2 className="text-xl font-bold mb-2">
                <a href="#" className="border-b border-transparent hover:border-gray-800 dark:hover:border-gray-200 transition-colors">Building non-caffeinated-musings</a>
              </h2>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                A deep dive into the technical decisions behind this platform, from choosing the right stack to implementing a custom theme system.
              </p>
            </div>
          </div>
        </article>

        <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-gray-500 italic">
            More articles are currently in the works...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;