import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Menu, Search as SearchIcon, Sun, Moon } from 'lucide-react';
import Breadcrumbs from './ui/Breadcrumbs';
import PageNavigation from './ui/PageNavigation';
import Search from './ui/Search';
import ScrollToTop from './ui/ScrollToTop';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-200">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ScrollToTop />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300">
        {/* Mobile Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 lg:hidden flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-2">
            <img src="/assets/cin-logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-gray-900 dark:text-white">Apuana</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              aria-label="Pesquisar"
            >
              <SearchIcon size={24} />
            </button>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </header>

        {/* Desktop Header/Search Trigger (Top Right) */}
        <div className="hidden lg:flex justify-end px-10 pt-6 gap-4">
           <button 
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm group"
          >
            <SearchIcon size={16} className="mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
            <span>Buscar...</span>
            <kbd className="ml-2 font-sans text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500 group-hover:border-blue-200 dark:group-hover:border-blue-800 group-hover:text-blue-500 dark:group-hover:text-blue-400">Ctrl K</kbd>
          </button>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-10 max-w-5xl mx-auto w-full pt-6 lg:pt-4">
          <Breadcrumbs />
          <div className="animate-in fade-in duration-500">
            {children}
          </div>
          <PageNavigation />
        </main>
      </div>
    </div>
  );
};

export default Layout;
