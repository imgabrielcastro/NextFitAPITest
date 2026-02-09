NextFit API - Backend

API para integrar com a NextFit.

Rodar o projeto
npm run dev

Backend roda em:

http://localhost:3000

Base da API:

http://localhost:3000/api

Rotas
GET /clientes

Lista clientes.

curl http://localhost:3000/api/clientes \
 -H "Authorization: Bearer <token>"

GET /clientes/:id

Busca cliente por ID.

curl http://localhost:3000/api/clientes/12345 \
 -H "Authorization: Bearer <token>"

.env obrigatório

Crie um arquivo .env na raiz do backend:

PORT=3000
NEXTFIT_BASE_URL=https://api.nextfit.com.br
NEXTFIT_ACCESS_TOKEN=seu_token_aqui

Sem essas variáveis a API não funciona.
