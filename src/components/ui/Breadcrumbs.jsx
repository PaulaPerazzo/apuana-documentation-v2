import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { navigationData } from '../../data/navigation';

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === '/') return null;

  let breadcrumbs = [];

  // Find the current page in navigation data
  for (const item of navigationData) {
    if (item.path === currentPath) {
      breadcrumbs.push({ name: item.name, path: item.path });
      break;
    }
    
    if (item.isSection && item.items) {
      const subItem = item.items.find(sub => sub.path === currentPath);
      if (subItem) {
        breadcrumbs.push({ name: item.name, path: null }); // Section has no path usually, or we could link to first item
        breadcrumbs.push({ name: subItem.name, path: subItem.path });
        break;
      }
    }
  }

  // If no match found (e.g. 404 or hidden page), show path segments
  if (breadcrumbs.length === 0) {
      // Simple fallback logic could be added here if needed
      return null;
  }

  return (
    <nav className="flex mb-6 text-gray-500 dark:text-gray-400 text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              {crumb.path ? (
                <Link to={crumb.path} className="ml-1 md:ml-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-gray-700 dark:text-gray-200">
                  {crumb.name}
                </Link>
              ) : (
                <span className="ml-1 md:ml-2 font-medium text-gray-700 dark:text-gray-200">{crumb.name}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
