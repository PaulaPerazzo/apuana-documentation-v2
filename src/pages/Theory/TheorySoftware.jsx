import React from 'react';

const TheorySoftware = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Software no cluster</h1>
      
      <p className="text-gray-700">
        Esta seção tem como objetivo conscientizar sobre os problemas que se pode encontrar ao tentar executar um software 
        em diferentes computadores e como isso é tratado em clusters de computação típicos.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Módulos de software do cluster</h2>
        <p className="text-gray-700">
          Os módulos são pequenos arquivos que modificam suas variáveis de ambiente para apontar para versões específicas 
          de vários softwares e bibliotecas. Por exemplo, um módulo pode fornecer o comando "python" para apontar para 
          o Python 3.7 ou ativar uma versão do CUDA.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contêineres</h2>
        <p className="text-gray-700">
          Os contêineres são uma forma especial de isolamento de software e suas dependências. Um contêiner é essencialmente 
          uma máquina virtual leve: ele encapsula um sistema de arquivos virtual para uma instalação completa do sistema 
          operacional, bem como uma rede e ambiente de execução separados.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Ambientes virtuais Python</h2>
        <p className="text-gray-700">
          Um ambiente virtual em Python é um ambiente local e isolado no qual você pode instalar ou desinstalar pacotes 
          Python sem interferir no ambiente global.
        </p>
      </section>
    </div>
  );
};

export default TheorySoftware;
