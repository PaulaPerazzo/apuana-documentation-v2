import React from 'react';
import CodeBlock from '../../components/ui/CodeBlock';
import Alert from '../../components/ui/Alert';

const UserGuideSharing = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b pb-4">Compartilhando Dados com ACLs</h1>
      
      <section className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          As ACLs (Listas de Controle de Acesso) permitem um controle mais granular de acessos a um arquivo do que 
          as permissões padrão (rwx).
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Exemplo: compartilhar uma pasta com outro usuário (<code>$USER2</code>) em: <br/>
          <code>/network/scratch/u/$USER/X/Y/Z/</code>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Passo a Passo</h2>
        
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">1. Garantir acesso a si mesmo (arquivos futuros)</h3>
        <CodeBlock language="bash">
          {`setfacl -Rdm user:\${USER}:rwx /network/scratch/\${USER:0:1}/\${USER}/X/Y/Z/`}
        </CodeBlock>

        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">2. Garantir acesso ao outro usuário (arquivos futuros)</h3>
        <CodeBlock language="bash">
          {`setfacl -Rdm user:\${USER2}:rwx /network/scratch/\${USER:0:1}/\${USER}/X/Y/Z/`}
        </CodeBlock>

        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">3. Garantir acesso ao outro usuário (arquivos existentes)</h3>
        <CodeBlock language="bash">
          {`setfacl -Rm user:\${USER2}:rwx /network/scratch/\${USER:0:1}/\${USER}/X/Y/Z/`}
        </CodeBlock>

        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">4. Permissão de pesquisa (execução) nas pastas pai</h3>
        <CodeBlock language="bash">
{`setfacl -m user:\${USER2}:x /network/scratch/\${USER:0:1}/\${USER}/X/Y/
setfacl -m user:\${USER2}:x /network/scratch/\${USER:0:1}/\${USER}/X/
setfacl -m user:\${USER2}:x /network/scratch/\${USER:0:1}/\${USER}/`}
        </CodeBlock>
        
        <Alert type="warning">
          Para acessar um arquivo, todas as pastas desde a raiz devem ser pesquisáveis (+x) pelo usuário.
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Visualizando ACLs</h2>
        <CodeBlock language="bash">getfacl /path/to/folder/or/file</CodeBlock>
      </section>
    </div>
  );
};

export default UserGuideSharing;
