import React from 'react';
import CodeBlock from '../../components/ui/CodeBlock';

const UserGuidePython = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Python</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Ambientes virtuais</h2>
        <p className="text-gray-700">
          Um ambiente virtual em Python é um ambiente local e isolado no qual você pode instalar ou desinstalar 
          pacotes do Python sem interferir no ambiente global.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Pip/Virtualenv</h2>
        <p className="text-gray-700">
          Primeiro, carregue o módulo Python que você deseja usar:
        </p>
        <CodeBlock language="bash">module load python/3.8</CodeBlock>
        
        <p className="text-gray-700">Então, crie um ambiente virtual no seu diretório <code>home</code>:</p>
        <CodeBlock language="bash">python -m venv $HOME/{'<env>'}</CodeBlock>
        
        <p className="text-gray-700">Finalmente, ative o ambiente:</p>
        <CodeBlock language="bash">source $HOME/{'<env>'}/bin/activate</CodeBlock>
        
        <p className="text-gray-700">Instalando pacotes:</p>
        <CodeBlock language="bash">pip install torch torchvision</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Conda</h2>
        <p className="text-gray-700">
          Você pode carregar o módulo do conda com o seguinte comando:
        </p>
        <CodeBlock language="bash">module load miniforge3/2025.07</CodeBlock>
        
        <p className="text-gray-700">Verificar versão:</p>
        <CodeBlock language="bash">conda --version</CodeBlock>
        
        <p className="text-gray-700">Criar novo ambiente:</p>
        <CodeBlock language="bash">conda create --n {'<env>'} python={'<version>'} -y</CodeBlock>
        
        <p className="text-gray-700">Ativar ambiente:</p>
        <CodeBlock language="bash">conda activate {'<env>'}</CodeBlock>
        
        <p className="text-gray-700">Desativar ambiente:</p>
        <CodeBlock language="bash">conda deactivate</CodeBlock>
      </section>
    </div>
  );
};

export default UserGuidePython;
