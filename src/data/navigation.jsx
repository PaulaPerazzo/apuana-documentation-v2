import React from 'react';
import { 
  Home, Server, BookOpen, Activity, 
  HelpCircle, Settings, Layers, FileText 
} from 'lucide-react';

export const navigationData = [
  { 
    name: 'Visão Geral', 
    path: '/', 
    icon: <Home size={20} />,
    description: 'Página inicial com visão geral, acesso e links rápidos.',
    keywords: ['home', 'inicio', 'cluster', 'apuana', 'acesso', 'vpn']
  },
  { 
    name: 'Cluster CIn', 
    path: '/cluster', 
    icon: <Server size={20} />,
    description: 'Detalhes sobre a arquitetura, hardware (CPUs, GPUs) e organização.',
    keywords: ['hardware', 'gpu', 'cpu', 'memoria', 'arquitetura', 'nós', 'nodes']
  },
  { 
    name: 'Instruções de Uso', 
    path: '/usage', 
    icon: <FileText size={20} />,
    description: 'Guia rápido: acesso SSH, jobs, Python e comandos básicos.',
    keywords: ['ssh', 'sbatch', 'squeue', 'slurm', 'python', 'pip', 'venv', 'rsync', 'copiar']
  },
  
  { 
    name: 'Teoria Geral', 
    icon: <BookOpen size={20} />,
    isSection: true,
    sectionKey: 'theory',
    items: [
      { 
        name: 'Introdução', 
        path: '/theory/intro',
        description: 'Conceitos fundamentais sobre computação de alto desempenho (HPC).',
        keywords: ['hpc', 'introducao', 'conceitos', 'supercomputador']
      },
      { 
        name: 'Hardware', 
        path: '/theory/parts',
        description: 'Componentes de um cluster: Login nodes, Compute nodes, Storage.',
        keywords: ['login node', 'compute node', 'storage', 'rede', 'infiniband']
      },
      { 
        name: 'Unix', 
        path: '/theory/unix',
        description: 'Introdução ao sistema operacional Linux/Unix usado no cluster.',
        keywords: ['linux', 'unix', 'shell', 'bash', 'terminal', 'comandos']
      },
      { 
        name: 'Escalonamento (Batch)', 
        path: '/theory/batch',
        description: 'Como funciona o escalonador de tarefas (Slurm).',
        keywords: ['scheduler', 'slurm', 'fila', 'job', 'prioridade', 'alocacao']
      },
      { 
        name: 'Dados', 
        path: '/theory/data',
        description: 'Armazenamento e gerenciamento de dados em clusters.',
        keywords: ['storage', 'nfs', 'lustre', 'dados', 'arquivos']
      },
      { 
        name: 'Software/Deps', 
        path: '/theory/software',
        description: 'Gerenciamento de software e dependências (Modules).',
        keywords: ['modules', 'lmod', 'software', 'bibliotecas', 'dependencias']
      },
    ]
  },
  
  { 
    name: 'Serviços e Sistemas', 
    path: '/services', 
    icon: <Settings size={20} />,
    description: 'Serviços disponíveis e ferramentas do sistema.',
    keywords: ['servicos', 'monitoramento', 'ferramentas']
  },
  
  { 
    name: 'Guias do Usuário', 
    icon: <Layers size={20} />,
    isSection: true,
    sectionKey: 'guides',
    items: [
      { 
        name: 'Guia Principal', 
        path: '/guides/main',
        description: 'Índice dos guias detalhados para usuários.',
        keywords: ['guia', 'tutorial', 'howto']
      },
      { 
        name: 'Rodando Código', 
        path: '/guides/running-code',
        description: 'Passo a passo para submeter e executar códigos.',
        keywords: ['run', 'executar', 'submeter', 'script', 'job']
      },
      { 
        name: 'Python', 
        path: '/guides/python',
        description: 'Guia completo para desenvolvimento Python no cluster.',
        keywords: ['python', 'conda', 'virtualenv', 'pip', 'jupyter', 'datascience']
      },
      { 
        name: 'Singularity', 
        path: '/guides/singularity',
        description: 'Uso de containers Singularity (Apptainer).',
        keywords: ['container', 'singularity', 'apptainer', 'docker', 'imagem']
      },
      { 
        name: 'Multi-GPU/Node', 
        path: '/guides/multinode',
        description: 'Execução distribuída em múltiplos nós e GPUs.',
        keywords: ['distribuido', 'mpi', 'nccl', 'multi-gpu', 'paralelo']
      },
      { 
        name: 'Compartilhando Dados', 
        path: '/guides/sharing-data',
        description: 'Boas práticas para compartilhamento e permissões.',
        keywords: ['permissoes', 'chmod', 'chown', 'grupo', 'compartilhar']
      },
      { 
        name: 'Portabilidade', 
        path: '/guides/portability',
        description: 'Como tornar seus scripts portáveis entre ambientes.',
        keywords: ['portabilidade', 'reprodutibilidade', 'env']
      },
    ]
  },
  
  { 
    name: 'Dashboard', 
    path: '/dashboard', 
    icon: <Activity size={20} />,
    description: 'Status atual do cluster, filas e utilização.',
    keywords: ['status', 'monitoramento', 'graficos', 'utilizacao', 'carga']
  },
  { 
    name: 'FAQ', 
    path: '/faq', 
    icon: <HelpCircle size={20} />,
    description: 'Perguntas frequentes e resolução de problemas.',
    keywords: ['faq', 'ajuda', 'erro', 'problema', 'suporte', 'duvidas']
  },
];
