# Instruções para Executar o Projeto (Aplicação React)

Este projeto foi construído utilizando React e Vite. Para executá-lo em sua máquina, você precisará ter o **Node.js** instalado.

## Pré-requisitos

*   **Node.js**: Se você ainda não tem, baixe e instale a versão LTS recomendada do site oficial: [https://nodejs.org/](https://nodejs.org/)

## Passo a Passo

1.  **Abrir o terminal na pasta do projeto**:
    Certifique-se de que você está dentro da pasta `Site_Apuana_React`.

2.  **Instalar as dependências**:
    Execute o seguinte comando para baixar todas as bibliotecas necessárias (listadas no `package.json`):
    ```bash
    npm install
    ```

3.  **Rodar o servidor de desenvolvimento**:
    Para iniciar a aplicação localmente, use:
    ```bash
    npm run dev
    ```
    Após rodar este comando, o terminal mostrará um link (geralmente `http://localhost:5173/`). Clique nele ou copie e cole no seu navegador para ver o site.

## Outros Comandos

*   **Criar versão de produção**:
    Para gerar a pasta `dist` com os arquivos otimizados para publicação:
    ```bash
    npm run build
    ```

*   **Visualizar a versão de produção**:
    Para testar localmente como ficou o build de produção:
    ```bash
    npm run preview
    ```
