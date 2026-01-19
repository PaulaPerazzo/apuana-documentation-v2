import React from 'react';
import CodeBlock from '../components/ui/CodeBlock';
import Alert from '../components/ui/Alert';

const Usage = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-4">Instruções de Uso</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Acessando o Cluster</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Para acessar o cluster é necessário ter um login <strong>cin.ufpe.br</strong> e ter o acesso habilitado 
          às máquinas de acesso do cluster. Também é necessário estar na <strong>VPN do CIn</strong>.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          O primeiro passo é solicitar o acesso ao cluster através do <a href="https://docs.google.com/forms/d/1bDDI9WIi1aipfp9BqoCOYne7CFQtOGjgdDzh9kr0drw/edit" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">formulário de cadastro</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Conectando à Máquina de Acesso</h2>
        <p className="text-gray-700 dark:text-gray-300">
          O envio de tarefas para o cluster precisa ser feito a partir de uma máquina de acesso via SSH:
        </p>
        <CodeBlock language="bash">
          ssh {'<login>'}@slurm-client1.cin.ufpe.br
        </CodeBlock>
        <p className="text-gray-700 dark:text-gray-300">
          Para acessar o servidor que realizará o processamento de forma interativa, utilize o comando:
        </p>
        <CodeBlock language="bash">
          salloc
        </CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Ambientes Virtuais Python</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Recomendamos o uso de ambientes virtuais para instalar pacotes sem interferir no sistema global.
        </p>
        
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 pt-2">Criando e Ativando Ambientes</h3>
        <p className="text-gray-700 dark:text-gray-300">Primeiro, carregue o módulo Python desejado (Ex: Python 3.10):</p>
        <CodeBlock language="bash">
          module load Python3.10
        </CodeBlock>
        
        <p className="text-gray-700 dark:text-gray-300">Crie o ambiente virtual (substitua <code>{'<env>'}</code> pelo nome desejado):</p>
        <CodeBlock language="bash">
          python -m venv $HOME/{'<env>'}
        </CodeBlock>

        <p className="text-gray-700 dark:text-gray-300">Ative o ambiente:</p>
        <CodeBlock language="bash">
          source $HOME/{'<env>'}/bin/activate
        </CodeBlock>

        <p className="text-gray-700 dark:text-gray-300">Agora você pode instalar pacotes via pip:</p>
        <CodeBlock language="bash">
          pip install torch torchvision
        </CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Execução de Jobs</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Exemplo de script <code>.sh</code> para submissão de job (TensorFlow/PyTorch):
        </p>
        <CodeBlock language="bash">
{`#!/bin/bash
#SBATCH --job-name=test_job
#SBATCH --ntasks=1
#SBATCH --mem 16G
#SBATCH -c 8
#SBATCH -o job.log
#SBATCH --output=job_output.txt
#SBATCH --error=job_error.txt

# carregar versão python
module load Python/3.10
# ativar ambiente
source $HOME/env_teste/bin/activate
# executar .py
python $HOME/test_dir/test.py`}
        </CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Comandos Básicos de Gerenciamento</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Agendar job</h3>
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm block mt-2 w-max text-gray-800 dark:text-gray-200">sbatch test_slurm.sh</code>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Verificar status (Fila)</h3>
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm block mt-2 w-max text-gray-800 dark:text-gray-200">squeue</code>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Cancelar job</h3>
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm block mt-2 w-max text-gray-800 dark:text-gray-200">scancel job_id</code>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Verificar logs</h3>
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm block mt-2 w-max text-gray-800 dark:text-gray-200">cat job_output.txt</code>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Partições e Limites de Recursos</h2>
        
        <div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">QoS (Qualidade de Serviço)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">QoS</th>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Máx CPUs</th>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Máx RAM</th>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Máx GPUs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">simple</td>
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">16</td>
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">64GB</td>
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">2</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">complex</td>
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">48</td>
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">500GB</td>
                  <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Partições</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            O cluster possui sete partições. Apenas <code>install</code> e <code>debug</code> aceitam execução interativa.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Partição</th>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Interativa</th>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Recursos</th>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Tempo Máx</th>
                  <th className="py-3 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Prioridade</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'emergency', interactive: '❌', res: 'Completo', time: '1 dia', prio: '1000' },
                  { name: 'install', interactive: '✅', res: 'Meio node', time: '30 mins', prio: '100' },
                  { name: 'debug', interactive: '✅', res: 'Completo node', time: '30 mins', prio: '10' },
                  { name: 'short-simple', interactive: '❌', res: 'Meio node', time: '2 dias', prio: '100' },
                  { name: 'short-complex', interactive: '❌', res: 'Completo node', time: '2 dias', prio: '50' },
                  { name: 'long-simple', interactive: '❌', res: 'Meio node', time: '7 dias', prio: '50' },
                  { name: 'long-complex', interactive: '❌', res: 'Completo node', time: '7 dias', prio: '25' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 border-b dark:border-gray-700 font-medium text-blue-800 dark:text-blue-400">{row.name}</td>
                    <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.interactive}</td>
                    <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.res}</td>
                    <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.time}</td>
                    <td className="py-3 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.prio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Sincronização de Arquivos</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Para transferir arquivos entre sua máquina e o cluster, utilize o comando <code>rsync</code>.
        </p>

        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 pt-2">Máquina Local → Cluster</h3>
        <CodeBlock language="bash">
          rsync --bwlimit=1000 -azP pasta-1 {'<login>'}@slurm-client1.cin.ufpe.br:~
        </CodeBlock>

        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 pt-2">Cluster → Máquina Local</h3>
        <CodeBlock language="bash">
          rsync --bwlimit=1000 -azP {'<login>'}@slurm-client1.cin.ufpe.br:~/pasta-1 ~
        </CodeBlock>
      </section>
    </div>
  );
};

export default Usage;
