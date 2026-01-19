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
            As credenciais de acesso ao cluster são mesmas credenciais utilizadas para acessar os serviços do CIn. 
            Podem ser redefinidas na <a href="https://intranet.cin.ufpe.br/" className="text-blue-600 dark:text-blue-400 hover:underline">Intranet do CIn</a>.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Onde encontrar as instruções de uso?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Nesta plataforma e no vídeo tutorial: <a href="https://www.youtube.com/watch?v=Odp2rDH-HOQ/" className="text-blue-600 dark:text-blue-400 hover:underline">Vídeo Tutorial</a>.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Acesso físico ou remoto?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Apenas remoto via VPN e SSH.
          </p>
          <CodeBlock language="bash">ssh-keygen -t rsa</CodeBlock>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">4. Há restrição no número de GPUs por job?</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Partição <code>short</code>: máx 2 GPUs.</li>
            <li>Partição <code>long</code>: máx 1 GPU.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">5. Mapeamento de GPUs e VRAM</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            16 GPUs (11x RTX 3090, 5x A100).
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Nós 1-5: RTX 3090 (24GB)</li>
            <li>Nós 6-9: A100 (80GB)</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">6. O que significa o status "PD"?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Pending (Pendente). Motivos comuns: Priority, Resources, AssocGrp, QOSMax.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">7. É possível solicitar mais memória?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Sim, use <code>--mem</code> no script, respeitando os limites da partição.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">8. Redirecionar job para outro nó?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Não é possível redirecionar jobs em execução. Use checkpointing.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">9. Verificar consumo de GPU/CPU?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Use <code>sacct</code> ou profiling da biblioteca (PyTorch Profiler).
          </p>
          <CodeBlock language="bash">nvidia-smi</CodeBlock>
        </div>
      </div>
    </div>
  );
};

export default Faq;
