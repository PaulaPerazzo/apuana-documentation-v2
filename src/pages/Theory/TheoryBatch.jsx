import React from 'react';

const TheoryBatch = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b pb-4">O gerenciador de carga de trabalho</h1>
      
      <p className="text-gray-700 dark:text-gray-300">
        Em um cluster, os usuários não têm acesso direto aos nós de computação, mas se conectam a um nó de login 
        e adicionam trabalhos à fila do gerenciador de carga de trabalho. Sempre que houver recursos disponíveis 
        para executar esses trabalhos, eles serão alocados para um nó de computação e executados.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Anatomia de um trabalho</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Um trabalho consiste em uma série de etapas que serão executadas uma após a outra. Isso é feito para que 
          você possa agendar uma sequência de processos que podem usar os resultados das etapas anteriores.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Cada etapa pode ter qualquer número de tarefas, que são grupos de processos que podem ser agendados 
          independentemente no cluster, mas podem ser executados em paralelo.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Finalmente, cada grupo de processos é a unidade básica agendada no cluster.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Compreendendo a fila</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Os recursos disponíveis no cluster não são infinitos e é o trabalho do gerenciador de carga alocá-los. 
          Sempre que uma solicitação de trabalho é feita e não há recursos suficientes disponíveis, ele será colocado na fila.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Sobre partições</h2>
        <p className="text-gray-700 dark:text-gray-300">
          O gerenciador de carga irá dividir o cluster em partições de acordo com a configuração definida pelos 
          administradores. Uma partição é um conjunto de máquinas geralmente reservadas para um propósito específico.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Ultrapassando limites</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Para garantir uma distribuição justa dos recursos, o gerenciador de carga estabelece limites na quantidade 
          de recursos que um único usuário pode usar de uma só vez.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Informações sobre Apuana</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Comandos de cliente <strong>Slurm</strong> estão disponíveis nos nós de login para que você possa enviar 
          trabalhos para o controlador principal. Existem dois tipos de trabalhos: 
          trabalhos em <em>lote</em> (batch) e trabalhos <em>interativos</em> (interactive).
        </p>
      </section>
    </div>
  );
};

export default TheoryBatch;
