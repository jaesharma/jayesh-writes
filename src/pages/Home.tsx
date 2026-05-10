import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 px-4 py-2 rounded-full mb-8 text-xs font-bold text-primary-700 dark:text-primary-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
        </span>
        Available for new projects
      </div>

      <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tighter">
        Building digital tools <br /> 
        <span className="text-primary-500">with intent.</span>
      </h1>
      
      <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-lg">
        I'm Jayesh, a developer focused on creating clean, functional, and meaningful software. This is where I document my builds and share what I've learned along the way.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link 
          to="/projects" 
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/20 flex items-center gap-2 group"
        >
          View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link 
          to="/about" 
          className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-zinc-700 transition-all"
        >
          About Me
        </Link>
      </div>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-700">
          <h3 className="font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs opacity-50">Latest Project</h3>
          <p className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">Jayesh Writes</p>
          <p className="text-sm text-slate-500 dark:text-zinc-400">My personal journal and portfolio platform.</p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-700">
          <h3 className="font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs opacity-50">Current Focus</h3>
          <p className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">Interactive UIs</p>
          <p className="text-sm text-slate-500 dark:text-zinc-400">Deep diving into Framer Motion and animation logic.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
