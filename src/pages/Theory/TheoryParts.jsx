import React from 'react';

const TheoryParts = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b pb-4">Partes de um cluster de computação</h1>
      
      <p className="text-gray-700 dark:text-gray-300">
        Para fornecer capacidades de computação de alto desempenho, clusters podem combinar centenas a milhares de computadores, 
        chamados de nós, que são todos interconectados por uma rede de comunicação de alto desempenho. A maioria dos nós são 
        projetados para cálculos de alto desempenho, mas clusters também podem usar nós especializados para oferecer sistemas 
        de arquivos paralelos, bancos de dados, nós de login e até mesmo a funcionalidade de agendamento do cluster, 
        conforme ilustrado na imagem abaixo.
      </p>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <img 
          src="/assets/cluster_overview_theory.png" 
          alt="Cluster Overview" 
          className="w-full h-auto rounded"
        />
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Os nós de login</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Para executar processos de computação em um cluster, você primeiro deve se conectar a um cluster e isso é feito 
          através de um <em>nó de login</em>. Esses chamados nós de login são o ponto de entrada para a maioria dos clusters.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Para se conectar a eles, você normalmente usaria uma conexão de shell remoto. A ferramenta mais comum para fazer isso é o SSH.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Os nós de computação</h2>
        <p className="text-gray-700 dark:text-gray-300">
          No campo da inteligência artificial, geralmente você estará à procura de GPUs. Na maioria dos clusters, os nós de 
          computação são aqueles com capacidade de GPU.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Embora haja um paradigma geral de tendência para uma configuração homogênea para nós, isso nem sempre é possível 
          no campo da IA, já que o hardware evolui rapidamente. Portanto, você frequentemente encontrará classes diferentes 
          de nós computacionais.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Os nós de armazenamento</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Alguns computadores em um cluster funcionam apenas para armazenar e servir arquivos. Embora o nome desses computadores 
          possa ser importante para alguns, como usuário, você só se preocupa com o caminho dos dados.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Nós diferentes para usos diferentes</h2>
        <p className="text-gray-700 dark:text-gray-300">
          É importante notar aqui a diferença nos usos pretendidos entre os nós de computação e os nós de login. 
          Enquanto os nós de computação são destinados a computação pesada, os nós de login não são.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Os nós de login são usados por todos que usam o cluster e deve-se tomar cuidado para não sobrecarregá-los. 
          Consequentemente, apenas processos muito curtos e leves devem ser executados nesses nós.
        </p>
      </section>
    </div>
  );
};

export default TheoryParts;
