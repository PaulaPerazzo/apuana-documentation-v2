import React from 'react';

const TheoryData = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Processamento de dados</h1>
      
      <p className="text-gray-700">
        Para processar grandes quantidades de dados comuns para o aprendizado profundo, seja para pré-processamento de 
        conjuntos de dados ou treinamento, existem várias técnicas.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Paralelismo de dados</h2>
        <p className="text-gray-700">
          A primeira técnica é chamada de <strong>paralelismo de dados</strong>. Você simplesmente executa muitos processos, 
          cada um lidando com uma parte dos dados que você deseja processar. Isso é de longe a técnica mais fácil de usar e 
          deve ser favorecida sempre que possível.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Paralelismo de modelo</h2>
        <p className="text-gray-700">
          A segunda técnica é chamada de <strong>paralelismo de modelo</strong>. É usada principalmente quando uma única 
          instância de um modelo não cabe em um recurso de computação (como a memória da GPU sendo muito pequena).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Preocupações com a comunicação</h2>
        <p className="text-gray-700">
          A principal diferença dessas duas abordagens é a necessidade de comunicação entre os múltiplos processos. 
          Para tarefas de paralelismo de dados, geralmente não faz muita diferença onde os processos estão. 
          Para o paralelismo de modelo, você precisa prestar mais atenção a onde estão suas tarefas.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Preocupações com o sistema de arquivos</h2>
        <p className="text-gray-700">
          Ao trabalhar em um cluster, você geralmente encontrará vários sistemas de arquivos diferentes 
          ("home", "scratch", "datasets", etc.).
        </p>
        <p className="text-gray-700">
          A razão de ter diferentes sistemas de arquivos disponíveis é fornecer para diferentes casos de uso.
          Por exemplo, "datasets" seria otimizado para leituras rápidas, mas teria desempenho lento de escrita.
        </p>
      </section>
    </div>
  );
};

export default TheoryData;
