import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Blog</h1>
      <p className="text-slate-500 dark:text-zinc-400 mb-12 font-medium">
        Thoughts on engineering, design, and life.
      </p>

      <div className="space-y-12">
        <article className="group relative">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
            <time className="font-mono text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest whitespace-nowrap">
              May 10, 2026
            </time>
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                <a href="#">Building jayesh.writes</a>
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                A deep dive into the technical decisions behind this platform, from choosing the right stack to implementing a custom theme system.
              </p>
            </div>
          </div>
        </article>

        <div className="pt-12 border-t border-slate-100 dark:border-zinc-800">
          <p className="text-slate-400 dark:text-zinc-600 font-bold italic">
            More articles are currently in the works...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
