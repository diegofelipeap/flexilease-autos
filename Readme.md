# FlexiLease Autos API

## Descrição

API para FlexiLease Autos, uma aplicação de aluguel de carros.

## Tecnologias

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- JWT
- Swagger

## Configuração

1. Clone o repositório:

```sh
git clone <URL do repositório>
Instale as dependências:
sh
Copiar código
npm install
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
env
Copiar código
PORT=3000
MONGODB_URI=<Sua URL do MongoDB>
JWT_SECRET=<Seu segredo JWT>
Inicie o servidor:
sh
Copiar código
npm run dev
Acesse a documentação da API:
bash
Copiar código
http://localhost:3000/api-docs
Estrutura do Projeto
src/controllers: Contém os controladores da aplicação.
src/models: Contém os modelos Mongoose.
src/routes: Contém as definições de rotas.
src/utils: Contém funções utilitárias.
src/middleware: Contém middlewares de autenticação e outros.
Testes
Para rodar os testes, use o comando:

sh
Copiar código
npm run test
Contribuição
Para contribuir, faça um fork do projeto, crie uma branch para sua feature ou correção de bug, faça o commit e envie um pull request.