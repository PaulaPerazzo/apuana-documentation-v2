import React from 'react';

const ClusterCin = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Arquitetura do cluster Apuana</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Visão geral da arquitetura e acesso</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <img 
            src="/assets/arquitetura_cluster_final.png" 
            alt="Arquitetura Cluster Final" 
            className="w-full h-auto rounded"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Visão geral de funcionamento do cluster</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
          <img 
            src="/assets/cluster_overview2.png" 
            alt="Cluster Overview" 
            className="w-full h-auto rounded"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Login Nodes</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>slurm-client[1-2]</li>
              <li>slurm (srun, salloc, sbatch)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Management</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>slurm-manager[1-2]</li>
              <li>slurmctld</li>
              <li>slurmdbdb</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Compute Nodes</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>cluster-node[1-5]</li>
              <li>slurmd</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Storage</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>$SLURM_TMPDIR</li>
              <li>Parallel Storage</li>
              <li>slurmdbdb database</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-lg mb-2 text-blue-900">Storage (baseado no MILA)</h3>
          <ul className="list-disc list-inside text-blue-800">
            <li>$HOME</li>
            <li>$DATASETS</li>
            <li>$SCRATCH</li>
            <li>$PROJECTS</li>
            <li>$ARCHIVE</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Política de Alocação de Recursos</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Cota destinada aos pesquisadores:</strong> (geralmente professores do CIn)
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
              <li>Pesquisadores definem os membros do grupo de pesquisa</li>
              <li>Todos em um grupo de pesquisa usam a cota do pesquisador</li>
            </ul>
          </li>
          <li>A cota destinada para cada pesquisador depende da quantidade de recursos que ele investiu no cluster.</li>
          <li>Uma cota mínima será fornecida a todos os professores do CIn e aos pesquisadores participantes do Projeto Hiper.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Política de Uso</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Fila de jobs</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cada usuário submete um job ao SLURM</li>
              <li>Na submissão do job, o usuário especifica os recursos que precisa (GPUs, CPUs, RAM)</li>
              <li>Quanto mais recursos ele solicitar, menor a prioridade</li>
              <li>Usuários com mais cota possuem maior prioridade</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Categorias de tempo execução</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Jobs de longa duração:</strong> ex.: 7 dias sem ser finalizado e usando poucos recursos</li>
              <li><strong>Jobs de média duração:</strong> ex.: 1 dia sem ser finalizado e usando uma quantidade média de recursos</li>
              <li><strong>Jobs de curta duração:</strong> ex.: 2 horas sem sofrer interrupção usando maior quantidade de recursos</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Preempção</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Após um certo tempo mínimo de execução, um job pode sofrer interrupção para dar espaço a outros jobs (em situações de sobrecarga)</li>
              <li>Ao sofrer interrupção, o job volta para a fila de espera e será retomado quando houver recursos para ele</li>
              <li>O usuário é responsável por implementar o salvamento e carregamento do estado do seu job (checkpointing)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Pontos Importantes Sobre a Segurança</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Acesso externo indevido</li>
          <li>
            Privacidade de dados
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
              <li>Datasets públicos (preferencialmente compartilhados)</li>
              <li>Datasets privados (compartilhados entre os membros de um grupo de pesquisa)</li>
            </ul>
          </li>
          <li>
            Uso indevido de recursos
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
              <li>Computação/armazenamento fora da cota de uso</li>
              <li>Mineração de criptomoedas (dentro ou fora da cota)</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ClusterCin;
