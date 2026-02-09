Projeto Clientes - Integração NextFit
⚠️ Importante

O backend precisa de um arquivo .env para funcionar.

Crie um arquivo chamado:

.env

Dentro da pasta do backend.

Conteúdo do .env
PORT=3000
NEXTFIT_BASE_URL=https://api.nextfit.com.br
NEXTFIT_ACCESS_TOKEN=SEU_TOKEN_AQUI

Substitua SEU_TOKEN_AQUI pelo token válido da NextFit.

Como rodar
Backend
npm install
npm run dev

Rodará em:

http://localhost:3000

Frontend
npm install
npm run dev

Observações

O backend precisa estar rodando antes do frontend.

Se der erro 401 ou 403, provavelmente o token expirou.
