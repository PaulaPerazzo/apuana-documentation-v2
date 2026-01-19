import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full mb-6">
        <AlertCircle size={48} className="text-red-500 dark:text-red-400" />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        404 - Página Não Encontrada
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Ops! A página que você está procurando não existe ou foi movida.
      </p>
      
      <Link 
        to="/" 
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
      >
        <Home size={20} />
        Voltar para o Início
      </Link>
    </div>
  );
};

export default NotFound;
