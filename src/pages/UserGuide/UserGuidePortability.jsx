import React from 'react';
import CodeBlock from '../../components/ui/CodeBlock';

const UserGuidePortability = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Portabilidade</h1>
      
      <section className="space-y-4">
        <p className="text-gray-700">
          Ao trabalhar em um projeto de software, é importante listar explicitamente todas as dependências 
          para facilitar a instalação em diferentes sistemas (cluster, laptop, colaboração).
        </p>
        
        <h3 className="text-xl font-medium text-gray-800">Aspectos Importantes</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Versões:</strong> Mantenha registro das versões específicas (ex: <code>pip freeze</code>).</li>
          <li><strong>Isolamento:</strong> Cada projeto deve ter seu próprio ambiente isolado.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Gerenciando seus ambientes</h2>
        <p className="text-gray-700">
          Veja a seção <a href="/guides/python" className="text-blue-600 hover:underline">Python</a> para detalhes sobre ambientes virtuais.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Usando módulos</h2>
        <p className="text-gray-700">
          Muito software já está disponível no cluster via módulos.
        </p>
        <CodeBlock language="bash">module load python/3.7</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Usando contêineres</h2>
        <p className="text-gray-700">
          Containers são uma abordagem popular para implantar aplicativos. Veja a seção <a href="/guides/singularity" className="text-blue-600 hover:underline">Singularity</a>.
        </p>
      </section>
    </div>
  );
};

export default UserGuidePortability;
