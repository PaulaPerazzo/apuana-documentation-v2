import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { navigationData } from '../data/navigation';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [expandedSections, setExpandedSections] = useState({
    theory: true,
    guides: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navItems = navigationData;

  const NavItem = ({ item }) => (
    <NavLink
      to={item.path}
      onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
        }`
      }
    >
      <span className="mr-3">{item.icon}</span>
      {item.name}
    </NavLink>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 dark:bg-gray-950 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-transparent dark:border-gray-800 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <img src="/assets/cin-logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-tight">Apuana</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden p-1 hover:bg-gray-800 rounded-md"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item, index) => {
            if (item.isSection) {
              const isExpanded = expandedSections[item.sectionKey];
              return (
                <div key={index} className="space-y-1">
                  <button
                    onClick={() => toggleSection(item.sectionKey)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                    aria-label={`Alternar seção ${item.name}`}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </div>
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  
                  {isExpanded && (
                    <div className="pl-11 space-y-1">
                      {item.items.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.path}
                          onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm rounded-md transition-colors ${
                              isActive
                                ? 'text-blue-400 font-medium'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return <NavItem key={index} item={item} />;
          })}
        </nav>

        <div className="p-4 border-t border-gray-800 text-xs text-center text-gray-500">
          &copy; 2024 CIn UFPE. Cluster Apuana.
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
