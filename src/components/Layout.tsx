import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Mail } from 'lucide-react';

const Logo = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const SubstackIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="16" 
    height="16"
    className="mr-1.5"
  >
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>
);

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
    <div className="min-h-screen bg-white dark:bg-[#111] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col min-h-screen">
        <header className="mb-10 flex justify-between items-center pb-4">
          <Link to="/" className="text-xl font-bold flex items-center group">
            <div className="text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
              <Logo />
            </div>
            <span className="tracking-tight group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              Non-Caffeinated Musings
            </span>
          </Link>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </header>

        <nav className="mb-12 flex gap-6 text-sm overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors py-1 ${
                location.pathname === item.path 
                  ? 'text-black dark:text-white font-semibold border-b border-black dark:border-white' 
                  : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm flex justify-between items-center text-gray-500 dark:text-gray-400">
          <div className="flex gap-6">
            <a 
              href="https://substack.com/@jayeshhere" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-black dark:hover:text-white transition-colors"
            >
              <SubstackIcon /> Substack
            </a>
            <a 
              href="mailto:sjay05305@gmail.com" 
              className="flex items-center hover:text-black dark:hover:text-white transition-colors"
            >
              <Mail size={16} className="mr-1.5" /> Email
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} Jayesh
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
