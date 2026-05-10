import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Projects</h1>
      <p className="text-slate-500 dark:text-zinc-400 mb-12 font-medium">
        A curated selection of things I've built.
      </p>

      <div className="grid gap-12">
        <div className="group relative">
          <div className="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-slate-50 dark:bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 rounded-2xl" />
          <div className="relative z-10">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                <a href="#">Jayesh Writes</a>
              </h2>
              <span className="text-xs font-black uppercase tracking-widest text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full w-fit">
                Live
              </span>
            </header>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              A custom-built personal platform for writing and showcasing work. Built with React, TypeScript, and Tailwind CSS with a focus on typography and minimalist interactions.
            </p>
          </div>
        </div>

        <div className="group relative opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
          <div className="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-slate-50 dark:bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 rounded-2xl" />
          <div className="relative z-10">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Coming Soon
              </h2>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                Building
              </span>
            </header>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              Working on something exciting. Stay tuned for updates in the Journal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
