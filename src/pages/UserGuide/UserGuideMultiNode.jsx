import React from 'react';
import CodeBlock from '../../components/ui/CodeBlock';

const UserGuideMultiNode = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Nós Múltiplos</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Paralelismo de Dados</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <img 
            src="/assets/dataparallel.png" 
            alt="Data Parallel" 
            className="w-full h-auto rounded"
          />
        </div>
        
        <p className="text-gray-700">Solicite 3 nós com pelo menos 4 GPUs cada um.</p>
        
        <CodeBlock language="bash">
{`#!/bin/bash

# Number of Nodes
#SBATCH --nodes=3

# Number of tasks. 3 (1 per node)
#SBATCH --ntasks=3

# Number of GPU per node
#SBATCH --gres=gpu:4
#SBATCH --gpus-per-node=4

# 16 CPUs per node
#SBATCH --cpus-per-gpu=4

# 16Go per nodes (4Go per GPU)
#SBATCH --mem=16G

# we need all nodes to be ready at the same time
#SBATCH --wait-all-nodes=1

# Setup our rendez-vous point
RDV_ADDR=$(hostname)
WORLD_SIZE=$SLURM_JOB_NUM_NODES
# -----

srun -l torchrun \\
    --nproc_per_node=$SLURM_GPUS_PER_NODE\\
    --nnodes=$WORLD_SIZE\\
    --rdzv_id=$SLURM_JOB_ID\\
    --rdzv_backend=c10d\\
    --rdzv_endpoint=$RDV_ADDR\\
    training_script.py`}
        </CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Script PyTorch Exemplo</h2>
        <p className="text-gray-700">Esboço de um treinador multi-nó:</p>
        <CodeBlock language="python">
{`import os
import torch.distributed as dist

class Trainer:
    def __init__(self):
        self.local_rank = None
        self.chk_path = ...
        self.model = ...

    @property
    def device_id(self):
        return self.local_rank

    def load_checkpoint(self, path):
        self.chk_path = path
        # ...

    def should_checkpoint(self):
        # Note: only one worker saves its weights
        return self.global_rank == 0 and self.local_rank == 0`}
        </CodeBlock>
      </section>
    </div>
  );
};

export default UserGuideMultiNode;
