### README.md

# Conector Personalizado n8n: Gerador de Números Aleatórios
-----

## Guia de Início Rápido

Este guia explica como colocar o projeto para rodar rapidamente usando **Docker**.

### Pré-requisitos

Antes de começar, certifique-se de que você tem o **Docker Desktop** instalado e rodando em sua máquina.

### Passo 1: Iniciar o Docker

Abra o **Docker Desktop** no seu sistema operacional e certifique-se de que ele está completamente inicializado. Você pode confirmar isso pelo ícone na bandeja do sistema.

### Passo 2: Clonar o Repositório

Abra um terminal, navegue até a pasta onde você deseja salvar o projeto e clone o repositório.

```bash
git clone https://github.com/ananinacoimbra/Teste_Onfly.git
cd Teste_Onfly
```

### Passo 3: Iniciar o Projeto

Com o Docker Desktop rodando e o terminal na pasta do projeto, execute o seguinte comando:

```bash
docker-compose up -d
```

Este comando vai construir a imagem, baixar as dependências e iniciar o n8n em um contêiner Docker.

```bash
n8n start
```

### Passo 4: Acessar a Interface

Após a execução do comando, abra seu navegador e acesse a interface do n8n no endereço:
**http://localhost:5678**

-----

### 3\. Informações Adicionais e Considerações de Design

  * **Estrutura do Projeto**: A estrutura segue as melhores práticas de desenvolvimento de nós personalizados para n8n, com o código do nó principal (`Random.node.ts`) e o ícone SVG separados para melhor organização.
  * **Mapeamento de Volumes**: O `docker-compose.yml` está configurado para mapear a pasta `dist` do projeto para o diretório `.n8n/custom/random` dentro do container do n8n. 
  * **Tratamento de Erros**: O conector inclui um tratamento de erro para a requisição da API, garantindo que o workflow do n8n possa lidar com falhas de forma robusta e amigável.
