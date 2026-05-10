import React from 'react';

const Daily: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Journal</h1>
      <p className="text-slate-500 dark:text-zinc-400 mb-12 font-medium">
        Daily logs, quick thoughts, and progress updates.
      </p>

      <div className="space-y-16">
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-zinc-800" />
          <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(51,94,255,0.5)]" />
          
          <time className="font-mono text-xs font-black text-primary-500 uppercase tracking-widest block mb-4">
            May 10, 2026
          </time>
          <div className="bg-slate-50 dark:bg-zinc-800/30 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
            <p className="text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
              Deployed the new theme system today. The transition to a more structured Indigo/Slate palette feels much more personal. Added smooth animations and improved the mobile experience.
            </p>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-12 opacity-60">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-zinc-800" />
          <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-300 dark:bg-zinc-700" />
          
          <time className="font-mono text-xs font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest block mb-4">
            May 09, 2026
          </time>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
            <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              Started mapping out the content strategy for the blog. Want to focus on technical architecture and minimalist design principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
