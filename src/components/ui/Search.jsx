import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, FileText, Hash, CornerDownLeft } from 'lucide-react';
import { navigationData } from '../../data/navigation';

const Search = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const navigate = useNavigate();

  // Flatten navigation for searching
  const flatNavigation = React.useMemo(() => {
    const flat = [];
    navigationData.forEach(item => {
      if (item.isSection) {
        if (item.items) {
          item.items.forEach(subItem => {
            flat.push({ ...subItem, section: item.name });
          });
        }
      } else {
        flat.push(item);
      }
    });
    return flat;
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = flatNavigation.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(lowerQuery);
      const sectionMatch = item.section && item.section.toLowerCase().includes(lowerQuery);
      const descMatch = item.description && item.description.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords && item.keywords.some(k => k.toLowerCase().includes(lowerQuery));
      
      return nameMatch || sectionMatch || descMatch || keywordMatch;
    });
    
    setResults(filtered);
    setSelectedIndex(0);
  }, [query, flatNavigation]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].path);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const selectedElement = resultsRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, results.length]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-start justify-center pt-16 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="relative inline-block w-full max-w-2xl transform overflow-hidden rounded-xl bg-white dark:bg-gray-800 text-left align-middle shadow-2xl transition-all border border-gray-200 dark:border-gray-700 mt-16 sm:mt-24">
          
          <div className="relative flex items-center border-b border-gray-200 dark:border-gray-700">
            <SearchIcon className="pointer-events-none absolute top-4 left-4 h-6 w-6 text-gray-400 dark:text-gray-500" />
            <input
              ref={inputRef}
              type="text"
              className="h-14 w-full border-0 bg-transparent pl-14 pr-12 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-0 sm:text-lg outline-none"
              placeholder="Buscar por tópico, comando ou palavra-chave..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {(query || results.length > 0) && (
            <div className="max-h-[60vh] overflow-y-auto py-2 bg-white dark:bg-gray-800">
              {results.length > 0 ? (
                <ul className="text-sm text-gray-700 dark:text-gray-300" ref={resultsRef}>
                  {results.map((result, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleSelect(result.path)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`group flex w-full items-center px-4 py-3 transition-colors ${
                          index === selectedIndex 
                            ? 'bg-blue-50 dark:bg-gray-700/50' 
                            : 'hover:bg-blue-50 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${
                          index === selectedIndex 
                            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                            : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400'
                        }`}>
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="ml-4 flex-auto text-left">
                          <div className="flex items-center justify-between">
                            <p className={`font-medium ${
                              index === selectedIndex 
                                ? 'text-blue-700 dark:text-blue-300' 
                                : 'text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300'
                            }`}>
                              {result.name}
                            </p>
                            {result.section && (
                              <span className={`text-xs ${
                                index === selectedIndex
                                  ? 'text-blue-500 dark:text-blue-400'
                                  : 'text-gray-400 dark:text-gray-500'
                              }`}>
                                {result.section}
                              </span>
                            )}
                          </div>
                          {result.description && (
                            <p className={`text-xs mt-0.5 line-clamp-1 ${
                              index === selectedIndex
                                ? 'text-blue-600/80 dark:text-blue-300/80'
                                : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600/80 dark:group-hover:text-blue-300/80'
                            }`}>
                              {result.description}
                            </p>
                          )}
                        </div>
                        {index === selectedIndex && (
                           <CornerDownLeft className="h-4 w-4 ml-2 text-gray-400 dark:text-gray-500 animate-pulse" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-14 px-6 text-center text-sm sm:px-14">
                  <p className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Nenhum resultado encontrado</p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Não encontramos resultados para "{query}". Tente sinônimos ou termos relacionados.
                  </p>
                </div>
              )}
            </div>
          )}
          
          <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 flex justify-between rounded-b-xl">
             <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <kbd className="font-sans px-1.5 py-0.5 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600" aria-hidden="true">↓</kbd> 
                  <kbd className="font-sans px-1.5 py-0.5 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600" aria-hidden="true">↑</kbd> 
                  <span className="sr-only">Setas para cima e baixo</span>
                  navegar
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="font-sans px-1.5 py-0.5 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600" aria-hidden="true">↵</kbd> 
                  <span className="sr-only">Enter</span>
                  abrir
                </span>
             </div>
             <span>
               <kbd className="font-sans px-1.5 py-0.5 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600" aria-hidden="true">Esc</kbd> 
               <span className="sr-only">Esc</span>
               fechar
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
