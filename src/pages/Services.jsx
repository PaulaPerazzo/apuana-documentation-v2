import React from 'react';
import CodeBlock from '../components/ui/CodeBlock';
import Alert from '../components/ui/Alert';

const Services = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b pb-4">Infraestrutura de computação e políticas</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Armazenamento</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm">
            <thead className="bg-gray-100 dark:bg-gray-900">
              <tr>
                <th className="py-2 px-3 border-b text-left">Path</th>
                <th className="py-2 px-3 border-b text-left">Performance</th>
                <th className="py-2 px-3 border-b text-left">Uso</th>
                <th className="py-2 px-3 border-b text-left">Quota</th>
                <th className="py-2 px-3 border-b text-left">Backup</th>
                <th className="py-2 px-3 border-b text-left">Limpeza</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-3 font-mono">/network/datasets/</td>
                <td className="py-2 px-3">High</td>
                <td className="py-2 px-3">Datasets brutos (leitura apenas)</td>
                <td className="py-2 px-3">-</td>
                <td className="py-2 px-3">-</td>
                <td className="py-2 px-3">-</td>
              </tr>
              <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-3 font-mono">$HOME</td>
                <td className="py-2 px-3">Low</td>
                <td className="py-2 px-3">Espaço pessoal, libs, código</td>
                <td className="py-2 px-3">100GB/1000K</td>
                <td className="py-2 px-3">Diário</td>
                <td className="py-2 px-3">Não</td>
              </tr>
              <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-3 font-mono">$SCRATCH</td>
                <td className="py-2 px-3">High</td>
                <td className="py-2 px-3">Resultados temporários, datasets processados</td>
                <td className="py-2 px-3">Não</td>
                <td className="py-2 px-3">Não</td>
                <td className="py-2 px-3">90 dias</td>
              </tr>
              <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-3 font-mono">$SLURM_TMPDIR</td>
                <td className="py-2 px-3">Highest</td>
                <td className="py-2 px-3">Disco local rápido para jobs</td>
                <td className="py-2 px-3">4TB/-</td>
                <td className="py-2 px-3">Não</td>
                <td className="py-2 px-3">Fim do job</td>
              </tr>
              <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-3 font-mono">/network/projects/</td>
                <td className="py-2 px-3">Fair</td>
                <td className="py-2 px-3">Espaço compartilhado (projetos)</td>
                <td className="py-2 px-3">200GB/1000K</td>
                <td className="py-2 px-3">Diário</td>
                <td className="py-2 px-3">Não</td>
              </tr>
              <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-3 font-mono">$ARCHIVE</td>
                <td className="py-2 px-3">Low</td>
                <td className="py-2 px-3">Armazenamento longo prazo</td>
                <td className="py-2 px-3">500GB</td>
                <td className="py-2 px-3">Não</td>
                <td className="py-2 px-3">Não</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Alert type="note">
          O sistema de arquivos <code>$HOME</code> é copiado uma vez por dia.
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Detalhes dos Sistemas de Arquivos</h2>
        
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">$HOME</h3>
        <p className="text-gray-700 dark:text-gray-300">Verificar quota:</p>
        <CodeBlock language="bash">beegfs-ctl --cfgFile=/etc/beegfs/home.d/beegfs-client.conf --getquota --uid $USER</CodeBlock>

        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">$SCRATCH</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Otimizado para arquivos pequenos. Limpeza automática após 90 dias sem uso.
        </p>

        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">$SLURM_TMPDIR</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Disco local do nó. Limpo após cada trabalho.
        </p>

        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">$ARCHIVE</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Para dados de longo prazo (ex: logs, dados para artigos). Apenas disponível nos nós de login.
          Recomendado arquivar diretórios (tar).
        </p>
        <CodeBlock language="bash">
{`cd $SCRATCH
tar cJf $ARCHIVE/my_experiment_results.tar.xz --xattrs my_experiment_results`}
        </CodeBlock>
        <p className="text-gray-700 dark:text-gray-300">Verificar uso:</p>
        <CodeBlock language="bash">df -h $ARCHIVE</CodeBlock>
      </section>
    </div>
  );
};

export default Services;
