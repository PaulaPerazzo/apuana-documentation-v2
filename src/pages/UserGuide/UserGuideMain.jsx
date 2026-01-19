import React from 'react';

const UserGuideMain = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b pb-4">Guia do Usuário</h1>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Esta seção busca fornecer aos usuários da infraestrutura Apuana conhecimentos práticos,
        dicas e truques e comandos de exemplo.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <a href="/guides/running-code" className="block p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-blue-700 dark:text-blue-400">Rodando Código</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Como executar scripts e jobs.</p>
        </a>
        <a href="/guides/python" className="block p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-blue-700 dark:text-blue-400">Python</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Ambientes virtuais, Conda, Pip.</p>
        </a>
        <a href="/guides/singularity" className="block p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-blue-700 dark:text-blue-400">Singularity</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Uso de contêineres no cluster.</p>
        </a>
        <a href="/guides/multinode" className="block p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-blue-700 dark:text-blue-400">Multi-Node</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Treinamento distribuído em vários nós.</p>
        </a>
      </div>
    </div>
  );
};

export default UserGuideMain;
