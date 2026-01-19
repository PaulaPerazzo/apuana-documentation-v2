import React from 'react';
import CodeBlock from '../../components/ui/CodeBlock';
import Alert from '../../components/ui/Alert';

const UserGuideRunning = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Executando o seu código</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Guia de comandos SLURM</h2>
        <p className="text-gray-700">
          A documentação do <a href="https://slurm.schedmd.com/documentation.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SLURM</a> fornece informações extensas.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Enviando trabalhos</h2>
        
        <h3 className="text-xl font-medium text-gray-800">Trabalho em lote</h3>
        <p className="text-gray-700">
          Para enviar um trabalho em lote, você precisa criar um script contendo os comandos principais.
        </p>
        <CodeBlock language="bash">
{`#!/bin/bash
#SBATCH --job-name=test
#SBATCH --output=job_output.txt
#SBATCH --error=job_error.txt
#SBATCH --ntasks=1
#SBATCH --time=10:00
#SBATCH --mem=100Gb

module load python/3.5
python my_script.py`}
        </CodeBlock>
        
        <p className="text-gray-700">Envie com:</p>
        <CodeBlock language="bash">sbatch job_script</CodeBlock>
        
        <Alert type="tip">
          As diretivas do Slurm podem ser especificadas na linha de comando juntamente com sbatch ou dentro do script de trabalho com #SBATCH.
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Job interativo</h2>
        <p className="text-gray-700">
          Se você quiser acessar um shell enquanto utiliza recursos do cluster, pode enviar um trabalho interativo com <code>salloc</code>.
        </p>
        <CodeBlock language="bash">salloc</CodeBlock>
        
        <Alert type="tip">
          Para passar seu ambiente atual para um trabalho interativo, adicione <code>--preserve-env</code> ao srun.
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Argumentos de submissão</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Argumento</th>
                <th className="py-2 px-4 border-b text-left">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="py-2 px-4 font-mono">-n, --ntasks</td><td className="py-2 px-4">Número de tarefas (geralmente 1)</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-mono">-c, --cpus-per-task</td><td className="py-2 px-4">Número de núcleos por tarefa</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-mono">-t, --time</td><td className="py-2 px-4">Tempo solicitado</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-mono">--mem</td><td className="py-2 px-4">Memória solicitada (ex: 100Gb)</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-mono">--gres</td><td className="py-2 px-4">Recursos genéricos (ex: gpu:1)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UserGuideRunning;
