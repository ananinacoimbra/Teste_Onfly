### README.md

# Conector Personalizado n8n: Gerador de Números Aleatórios

Este repositório contém um **conector personalizado (custom node)** para a plataforma de automação **n8n**. O conector, chamado **"Random"**, utiliza a API do [Random.org](https://www.random.org/) para gerar números inteiros verdadeiramente aleatórios, com base em limites mínimo e máximo definidos pelo usuário.

-----

### Pré-requisitos Técnicos

  * **Node.js**: Versão 22 (LTS)
  * **Docker** e **Docker Compose**
  * **TypeScript**

-----

### Requisitos Funcionais do Conector

  * **Nome**: `Random`
  * **Operação Única**: `True Random Number Generator`
  * **Inputs**: `Min` e `Max` (ambos inteiros inclusos)
  * **API**: Utiliza o endpoint GET da API do Random.org.

-----

### 1\. Instalação e Configuração

Siga os passos abaixo para instalar as dependências, configurar o ambiente e executar o serviço localmente.

#### 1.1. Instalar as Dependências do Node

Primeiro, navegue até a pasta do conector (`nodes/Random`) e instale as dependências necessárias para o projeto.

```bash
cd nodes/Random
npm install
```

#### 1.2. Configurar o Ambiente

O projeto utiliza o **Docker Compose** para orquestrar a infraestrutura do n8n com um banco de dados **PostgreSQL**.

1.  **Crie o arquivo de variáveis de ambiente**:
    Na raiz do projeto, copie o arquivo de exemplo para criar o seu arquivo de configuração local.

    ```bash
    cp .env.example .env
    ```

2.  **Preencha as variáveis**:
    Edite o arquivo recém-criado (`.env`) e preencha as variáveis de ambiente com os valores desejados, como credenciais de acesso ao n8n e ao banco de dados PostgreSQL.

#### 1.3. Compilar o Custom Node

Para que o n8n reconheça o conector, o código TypeScript precisa ser compilado para JavaScript.

```bash
cd nodes/Random_num
npm run build
```

Este comando irá gerar a pasta `dist` com os arquivos compilados.

#### 1.4. Executar o Serviço Localmente (com Docker)

Agora, com o ambiente configurado, você pode subir os containers do n8n e do PostgreSQL.

Execute o seguinte comando na **raiz do repositório**:

```bash
docker compose up -d
```

O flag `-d` executa os serviços em modo *detached* (segundo plano). O seu n8n estará acessível em `http://localhost:5678`.

-----

### 2\. Executar os Testes

O projeto inclui testes unitários para garantir o correto funcionamento do conector. Para executá-los, use o seguinte comando na pasta do nó (`nodes/Random`):

```bash
npm run test
```

Os testes verificam se a chamada à API do Random.org está correta e se o conector lida com diferentes cenários de input (`min` e `max`).

-----

### 3\. Informações Adicionais e Considerações de Design

  * **Estrutura do Projeto**: A estrutura segue as melhores práticas de desenvolvimento de nós personalizados para n8n, com o código do nó principal (`Random.node.ts`) e o ícone SVG separados para melhor organização.
  * **Mapeamento de Volumes**: O `docker-compose.yml` está configurado para mapear a pasta `dist` do seu projeto para o diretório `.n8n/custom/random` dentro do container do n8n. Isso permite que qualquer alteração no seu código seja automaticamente refletida, agilizando o desenvolvimento.
  * **Tratamento de Erros**: O conector inclui um tratamento de erro para a requisição da API, garantindo que o workflow do n8n possa lidar com falhas de forma robusta e amigável.
