import React from 'react';
import CodeBlock from '../../components/ui/CodeBlock';
import Alert from '../../components/ui/Alert';

const UserGuideSingularity = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b pb-4">Singularity</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Visão Geral</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Executar o Docker no SLURM é um problema de segurança. A alternativa é usar o Singularity, 
          que é uma solução popular no mundo de HPC. Existe um bom nível de compatibilidade entre Docker e Singularity.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Links oficiais: <a href="https://singularity-docs.readthedocs.io/en/latest/" className="text-blue-600 dark:text-blue-400 hover:underline">User Guide</a>, <a href="https://sylabs.io/guides/latest/admin-guide/" className="text-blue-600 dark:text-blue-400 hover:underline">Admin Guide</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Construindo Containers</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Construir um container é como criar um novo ambiente autocontido.
        </p>
        <Alert type="warning">NÃO construa containers em nenhum nó de login! Use seu computador local ou um nó de computação interativo.</Alert>
        
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Baixando do DockerHub</h3>
        <p className="text-gray-700 dark:text-gray-300">Exemplo (PyTorch):</p>
        <CodeBlock language="bash">singularity pull docker://pytorch/pytorch:1.0.1-cuda10.0-cudnn7-runtime</CodeBlock>

        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Criando um Sandbox (Gravável)</h3>
        <CodeBlock language="bash">singularity build --sandbox pytorch pytorch-1.0.1-cuda10.0-cudnn7-runtime.simg</CodeBlock>
        
        <p className="text-gray-700 dark:text-gray-300">Entrando no sandbox:</p>
        <CodeBlock language="bash">singularity shell --writable -H $HOME:/home pytorch</CodeBlock>
        
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Criando imagem final</h3>
        <CodeBlock language="bash">singularity build pytorch_final.simg pytorch</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Usando Containers no Cluster</h2>
        <p className="text-gray-700 dark:text-gray-300">
          No cluster Apuana, <code>$SCRATCH</code> deve ser usado para armazenar containers e resultados.
        </p>
        
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Executando Jobs</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Você deve montar os diretórios necessários (como dataset e logs). Exemplo de execução:
        </p>
        <CodeBlock language="bash">
{`singularity exec --nv \\
    -H $HOME:/home \\
    -B $SLURM_TMPDIR:/dataset/ \\
    -B $SLURM_TMPDIR:/tmp_log/ \\
    -B $SCRATCH:/final_log/ \\
    $SLURM_TMPDIR/<YOUR_CONTAINER> \\
    python <YOUR_CODE>`}
        </CodeBlock>

        <h3 className="text-xl font-medium text-gray-800">Script SBATCH Exemplo</h3>
        <CodeBlock language="bash">
{`#!/bin/bash
#SBATCH --cpus-per-task=6
#SBATCH --gres=gpu:1
#SBATCH --mem=10G
#SBATCH --time=0:10:00

# 1. Copy container and data to compute node
rsync -avz $SCRATCH/<YOUR_CONTAINER> $SLURM_TMPDIR
rsync -avz $SCRATCH/<YOUR_DATASET> $SLURM_TMPDIR

# 2. Execute code
singularity exec --nv \\
        -H $HOME:/home \\
        -B $SLURM_TMPDIR:/dataset/ \\
        -B $SLURM_TMPDIR:/tmp_log/ \\
        -B $SCRATCH:/final_log/ \\
        $SLURM_TMPDIR/<YOUR_CONTAINER> \\
        python "<YOUR_CODE>"

# 3. Save results
rsync -avz $SLURM_TMPDIR/<to_save> $SCRATCH`}
        </CodeBlock>
      </section>
    </div>
  );
};

export default UserGuideSingularity;
