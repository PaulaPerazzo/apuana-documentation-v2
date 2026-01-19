import React from 'react';
import { Info, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

const Alert = ({ type = 'note', title, children }) => {
  const styles = {
    note: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-300',
      icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />,
    },
    tip: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-800 dark:text-green-300',
      icon: <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />,
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />,
    },
    danger: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-800 dark:text-red-300',
      icon: <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />,
    },
  };

  const style = styles[type] || styles.note;

  return (
    <div className={`${style.bg} border-l-4 ${style.border} p-4 my-4 rounded-r-md transition-colors`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {style.icon}
        </div>
        <div className="ml-3">
          {title && <h3 className={`text-sm font-medium ${style.text} mb-1`}>{title}</h3>}
          <div className={`text-sm ${style.text} opacity-90`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
