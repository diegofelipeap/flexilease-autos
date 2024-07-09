# FlexiLease Autos API

## Instruções para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd flexilease-autos

2. Instale as dependências:
bash
Copiar código
npm install
javascript
Copiar código

3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```env
PORT=3000
MONGODB_URI=<SUA_URI_DO_MONGODB>
JWT_SECRET=<SUA_CHAVE_SECRETA>
Inicie o servidor:

bash
Copiar código
npm run dev
Acesse a documentação da API:

bash
Copiar código
http://localhost:3000/api-docs
Scripts Disponíveis
npm run dev: Inicia o servidor em modo de desenvolvimento.
npm run build: Compila o projeto para a pasta dist.
npm run start: Inicia o servidor com o código compilado.
npm run lint: Verifica se há problemas de lint no código.
npm run format: Formata o código usando Prettier.