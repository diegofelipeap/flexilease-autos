# FlexiLease Autos API

Esta é a API do FlexiLease Autos, desenvolvida para gerenciar carros e reservas de forma eficiente. A API é construída com Node.js, Express e TypeScript, e utiliza MongoDB como banco de dados. Este documento descreve como configurar, executar e utilizar a API.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- Swagger
- JWT para autenticação
- ESLint e Prettier para manutenção de código
- Jest para testes

## Pré-requisitos

- Node.js instalado
- MongoDB instalado e em execução
- Yarn ou npm instalado

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/flexilease-autos.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd flexilease-autos
    ```

3. Instale as dependências:

    ```bash
    yarn install
    # ou
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/flexilease
    JWT_SECRET=seu_segredo_jwt
    ```

## Estrutura do Projeto

O projeto segue uma estrutura modular para facilitar a manutenção e a escalabilidade. A seguir, uma breve descrição das principais pastas e arquivos:

- `src/models`: Contém os modelos Mongoose para Carro e Usuário.
- `src/controllers`: Contém a lógica dos controladores para Carro e Usuário.
- `src/routes`: Contém as definições de rotas para Carro, Usuário, Reservas e Autenticação.
- `src/middleware`: Contém middlewares, incluindo o middleware de autenticação JWT.
- `src/utils`: Contém funções utilitárias para validação e outros.

## Executando a Aplicação

1. Inicie o servidor:

    ```bash
    yarn start
    # ou
    npm start
    ```

2. A API estará disponível em `http://localhost:3000`.

## Documentação da API

A documentação da API é gerada com Swagger e pode ser acessada em `http://localhost:3000/api-docs`.

## Funcionalidades

### Autenticação

- **POST /api/v1/auth/login**: Autenticação de usuários e geração de token JWT.

### Usuários

- **POST /api/v1/users**: Criação de novo usuário.
- **GET /api/v1/users**: Listagem de todos os usuários.
- **GET /api/v1/users/:id**: Obtenção de um usuário por ID.
- **PUT /api/v1/users/:id**: Atualização de um usuário por ID.
- **DELETE /api/v1/users/:id**: Exclusão de um usuário por ID.

### Carros

- **POST /api/v1/cars**: Criação de novo carro.
- **GET /api/v1/cars**: Listagem de todos os carros.
- **GET /api/v1/cars/:id**: Obtenção de um carro por ID.
- **PUT /api/v1/cars/:id**: Atualização de um carro por ID.
- **DELETE /api/v1/cars/:id**: Exclusão de um carro por ID.

### Reservas

- **POST /api/v1/reservations**: Criação de nova reserva.
- **GET /api/v1/reservations**: Listagem de todas as reservas.
- **GET /api/v1/reservations/:id**: Obtenção de uma reserva por ID.
- **PUT /api/v1/reservations/:id**: Atualização de uma reserva por ID.
- **DELETE /api/v1/reservations/:id**: Exclusão de uma reserva por ID.

## Testes

Para executar os testes, utilize:

```bash
yarn test
# ou
npm test
