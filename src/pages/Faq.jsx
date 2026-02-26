import React from 'react';
import CodeBlock from '../components/ui/CodeBlock';

const Faq = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b pb-4">Perguntas Frequentes (FAQ)</h1>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Como obter as credenciais de acesso?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            As credenciais de acesso ao cluster são as mesmas credenciais utilizadas para acessar os serviços do CIn (como acessar
            os computadores dos laboratórios de graduação). Caso o usuário tenha esquecido seus acessos, eles podem ser redefinidos na
            <a href="https://intranet.cin.ufpe.br/" className="text-blue-600 dark:text-blue-400 hover:underline"> Intranet do CIn</a>.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Onde encontrar as instruções de uso?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A documentação completa  do Apuana está disponível nesta plataforma
            <a href="https://apuana.cin.ufpe.br/" className="text-blue-600 dark:text-blue-400 hover:underline"> https://apuana.cin.ufpe.br/</a>.
            Além disso, informações adicionais de uso e lançamento de jobs podem ser encontrados nesse vídeo:
            <a href="https://www.youtube.com/watch?v=Odp2rDH-HOQ/" className="text-blue-600 dark:text-blue-400 hover:underline"> Vídeo Tutorial</a>.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            3. É possível acessar o Apuana fisicamente no CIn ou apenas remotamente?
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            O clsuter pode ser acessado apenas remotamente, através de conexão VPN e SSH.
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Para se conectar à VPN do CIn, siga as instruções disponíveis em <a href="https://helpdesk.cin.ufpe.br/servicos/conectividade/vpn" className="text-blue-600 dark:text-blue-400 hover:underline"> Helpdesk CIn</a>.</li>
              <li>Para criar uma chave ssh e conseguir se conectar ao cluster corretamente, basta executar esse comando na pasta raiz do seu terminal:</li>
            </ul>
          </p>

          <CodeBlock language="bash">ssh-keygen -t rsa</CodeBlock>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Não é necessária a criação de novos diretórios ou arquivos, apenas deve-se seguir as intruções, mantendo todas as configurações
              sugeridas como <code>default</code>.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">4. Há restrição no número de GPUs por job?</h2>
          Sim, existe um número de restrição de GPU a cada job, dependendo da partição que o usuário estiver usando.

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Partição <code>simple</code>: máximo de 2 GPUs.</li>
            <li>Partição <code>complex</code>: máximo de 4 GPUs.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            5. Qual o mapeamento dos nós aos tipos de GPU e a VRAM disponível em cada nó?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Atualmente, o cluster Apuana conta com 16 GPUs (sendo 11 NVIDIA RTX 3090 e 5 NVIDIA A100)
            distribuídas entre 9 nós. A relação entre a distribuição de GPUs e sua memória VRAM pode ser encontrada na tabela abaixo.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="py-2 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">Nodo</th>
                  <th className="py-2 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">GPUs</th>
                  <th className="py-2 px-4 text-left border-b dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200">VRAM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { no: '1', gpus: '2 x NVIDIA RTX 3090', vram: '24576 MiB cada' },
                  { no: '2', gpus: '3 x NVIDIA RTX 3090', vram: '24576 MiB cada' },
                  { no: '3', gpus: '2 x NVIDIA RTX 3090', vram: '24576 MiB cada' },
                  { no: '4', gpus: '2 x NVIDIA RTX 3090', vram: '24576 MiB cada' },
                  { no: '5', gpus: '2 x NVIDIA RTX 3090', vram: '24576 MiB cada' },
                  { no: '6', gpus: '1 x NVIDIA A100', vram: '81920 MiB' },
                  { no: '7', gpus: '1 x NVIDIA A100', vram: '81920 MiB' },
                  { no: '8', gpus: '1 x NVIDIA A100', vram: '81920 MiB' },
                  { no: '9', gpus: '2 x NVIDIA A100', vram: '81920 MiB cada' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300 font-medium">{row.no}</td>
                    <td className="py-2 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.gpus}</td>
                    <td className="py-2 px-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-300">{row.vram}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">6. O que significa o status "PD"?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            O status “PD” é um acrônimo para o status “Pending”, ou seja, o job está em espera para ser iniciado.
            As razões mais comuns para que isso aconteça podem ser:
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li> <strong>AssocGrp</strong> — A associação ao qual o usuário está vinculado atingiu seu limite agregado de jobs.</li>
              <li> <strong>AssocMax</strong> — Os recursos que o job solicita excedem o limite máximo permitido pela associação.</li>
              <li> <strong>BeginTime</strong> — O tempo mínimo de início do job não foi atingido.</li>
              <li> <strong>Dependency</strong> — O job tem uma depedência em outro job que ainda não foi finalizado.</li>
              <li> <strong>QOSMax</strong> — O job excedeu o limite de recursos permitido pela QOS (Quality of Service).</li>
              <li> <strong>Priority</strong> — Um ou mais jobs com maior prioridade podem estar na fila.</li>
              <li> <strong>Resources</strong> — Os recursos solicitados pelo job snão estão disponíveis.</li>
            </ul>

            Mais detalhes podem ser encontrados na documentação do slurm em <a href="https://slurm.schedmd.com/job_reason_codes.html" className="text-blue-600 dark:text-blue-400 hover:underline">
              docs Slurm
            </a>.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">7. É possível solicitar mais memória?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            O usuário pode definir a memória necessária para o seu job através do parâmetro --mem, dentro do seu script.sh. Por exemplo:

            <CodeBlock language="bash">
              #SBATCH --mem=16G  # solicita 16 GB de memória RAM
            </CodeBlock>

            No entanto, não é possível solicitar mais memória do que o estebelecido pelos limites do cluster, que dependem da partição utilizada (short ou long).
            Além disso, o slurm aloca os recursos que serão utilizados estaticamente no momento da submissão do job, não sendo possível alterá-los em tempo de execução do job.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            8. Como redirecionar um job em execução para outro nó, especialmente durante uma manutenção?
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            No slurm não é possível fazer o redirecionamento de um job em execução para outro nó.
            Por isso, é importante que os usuários implementem rotinas de checkpoint em seus jobs, para que seja possível retomar a execução do job em outro nodo,
            caso o nó atual fique indisponível.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">9. Verificar consumo de GPU/CPU?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            No slurm é possível verificar os recursos alocados de GPU e CPU de um job através do comando sacct:

            <CodeBlock language="bash">
              sacct -j job_id --format=JobID,State,Elapsed,MaxRSS,AveCPU,ReqMem,AllocCPUs
            </CodeBlock>

            Porém, para fazer uma análise mais detalhada de como seu algoritmo está utilizando os recursos computacionais,
            é necessário usar o profiling da biblioteca que está sendo utilizada. Por exemplo, o pytorch.

            Outra maneira que pode ser utilizada para verificar o uso de GPU é através do comando <code>nvidia-smi</code>, dentro do nó onde o job está rodando:
          </p>
          <CodeBlock language="bash">nvidia-smi</CodeBlock>
        </div>
      </div>
    </div>
  );
};

export default Faq;
