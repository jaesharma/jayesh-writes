import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Mail, ExternalLink } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Journal', path: '/daily' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col min-h-[90vh]">
        <div className="p-8 sm:p-12 flex-grow">
          <header className="flex justify-between items-center mb-12">
            <Link to="/" className="text-2xl font-black tracking-tighter text-primary-600 dark:text-primary-400">
              jayesh.writes
            </Link>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 bg-slate-100 dark:bg-zinc-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} className="text-primary-400" /> : <Moon size={18} className="text-primary-600" />}
            </button>
          </header>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 mb-16 text-sm font-bold border-b border-slate-100 dark:border-zinc-800 pb-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative py-1 transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400",
                  location.pathname === item.path 
                    ? "text-primary-600 dark:text-primary-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500 after:rounded-full" 
                    : "text-slate-400 dark:text-zinc-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <main>
            {children}
          </main>
        </div>

        <footer className="bg-slate-50/50 dark:bg-zinc-900/50 border-t border-slate-100 dark:border-zinc-800 p-8 sm:p-12 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 font-bold">
              <a 
                href="https://substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1.5"
              >
                Substack <ExternalLink size={14} />
              </a>
              <a 
                href="mailto:sjay05305@gmail.com" 
                className="text-slate-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} /> sjay05305@gmail.com
              </a>
            </div>
            <div className="text-slate-400 dark:text-zinc-600 font-medium">
              © {new Date().getFullYear()} Jayesh
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
