import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { navigationData } from '../../data/navigation';

const PageNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Flatten the navigation structure into a linear list of pages
  const flatNavigation = [];
  
  navigationData.forEach(item => {
    if (item.isSection) {
      if (item.items) {
        item.items.forEach(subItem => {
          flatNavigation.push({ ...subItem, section: item.name });
        });
      }
    } else {
      flatNavigation.push(item);
    }
  });

  const currentIndex = flatNavigation.findIndex(item => item.path === currentPath);

  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? flatNavigation[currentIndex - 1] : null;
  const nextItem = currentIndex < flatNavigation.length - 1 ? flatNavigation[currentIndex + 1] : null;

  return (
    <div className="flex flex-col md:flex-row justify-between mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
        {prevItem && (
          <Link
            to={prevItem.path}
            className="group flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              <ChevronLeft size={16} className="mr-1" />
              Anterior
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300">
              {prevItem.name}
            </span>
          </Link>
        )}
      </div>

      <div className="w-full md:w-1/2 md:pl-4">
        {nextItem && (
          <Link
            to={nextItem.path}
            className="group flex flex-col items-end p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all text-right"
          >
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Próximo
              <ChevronRight size={16} className="ml-1" />
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300">
              {nextItem.name}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
