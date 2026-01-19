import React from 'react';
import Alert from '../components/ui/Alert';

const Home = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-4">Documentação do Cluster Apuana</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Acessando o Cluster</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Para acessar o cluster é necessário ter um login <strong>cin.ufpe.br</strong> e ter o acesso habilitado 
          às máquinas de acesso do cluster. Também é necessário estar conectado à <strong>VPN do CIn</strong>.
        </p>
        
        <Alert type="note" title="Status do Projeto">
          Este projeto está em desenvolvimento ativo.
        </Alert>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">Visão Geral</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Conheça a arquitetura e hardware do cluster.</p>
          <a href="/cluster" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Saiba mais &rarr;</a>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">Primeiros Passos</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Aprenda a submeter jobs e rodar seus códigos.</p>
          <a href="/usage" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Começar &rarr;</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
