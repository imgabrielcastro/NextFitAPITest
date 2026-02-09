# NextFit API - Backend

API para integração com o sistema NextFit.

## Rodar o projeto

```bash
# Backend (porta 3000)
npm run dev

# Frontend (porta 5173)
cd frontend && npm run dev
```

---

## Rotas da API

### Base URL
```
http://localhost:3000/api
```

---

## Autenticação

### POST /auth/login
Faz login e retorna um token JWT.

**Request:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joseph@gmail.com",
    "password": "123456a"
  }'
```

**Response (200):**
```json
{
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "email": "joseph@gmail.com",
    "codigoUnidade": "13704"
  }
}
```

**Response (401):**
```json
{
  "error": "Acesso negado",
  "message": "Email ou senha incorretos"
}
```

**Response (400):**
```json
{
  "error": "Campos obrigatórios",
  "message": "Email e senha são obrigatórios"
}
```

---

## Clientes/Alunos

> **Todas as rotas abaixo precisam de autenticação!**
> Adicione o header: `Authorization: Bearer <token>`

### GET /clientes
Lista todos os clientes/alunos.

**Request:**
```bash
curl http://localhost:3000/api/clientes \
  -H "Authorization: Bearer <seu_token>"
```

**Response (200):**
```json
{
  "Content": [
    {
      "Id": 12345,
      "Nome": "João Silva",
      "Sexo": "M",
      "DataNascimento": "1990-05-15T00:00:00",
      "ClienteParametro": {
        "Status": "Ativo",
        "Vip": false
      }
    },
    {
      "Id": 12346,
      "Nome": "Maria Santos",
      "Sexo": "F",
      "DataNascimento": "1985-08-20T00:00:00",
      "ClienteParametro": {
        "Status": "Ativo",
        "Vip": true
      }
    }
  ],
  "TotalCount": 2
}
```

---

### GET /clientes/:id
Busca um cliente específico pelo ID.

**Request:**
```bash
curl http://localhost:3000/api/clientes/12345 \
  -H "Authorization: Bearer <seu_token>"
```

**Response (200):**
```json
{
  "Id": 12345,
  "Nome": "João Silva",
  "Sexo": "M",
  "DataNascimento": "1990-05-15T00:00:00",
  "Email": "joao@email.com",
  "DddFone": "11",
  "Fone": "999999999",
  "Cpf": "123.456.789-00",
  "UsuarioConsultor": {
    "Id": 100,
    "Nome": "Consultor Exemplo"
  }
}
```

**Response (404):**
```json
{
  "message": "Cliente não encontrado"
}
```

---

## Erros Comuns

### 401 - Não autorizado
```json
{
  "error": "Acesso negado",
  "message": "Token não fornecido"
}
```

```json
{
  "error": "Acesso negado",
  "message": "Token inválido ou expirado"
}
```

### 500 - Erro interno
```json
{
  "message": "Erro ao listar clientes"
}
```

---

## Testando no Postman

### 1. Fazer Login
- Método: `POST`
- URL: `http://localhost:3000/api/auth/login`
- Body (JSON):
```json
{
  "email": "joseph@gmail.com",
  "password": "123456a"
}
```
- Copie o `token` da resposta

### 2. Listar Clientes
- Método: `GET`
- URL: `http://localhost:3000/api/clientes`
- Headers:
  - `Authorization`: `Bearer <token_copiado>`

### 3. Buscar Cliente por ID
- Método: `GET`
- URL: `http://localhost:3000/api/clientes/12345`
- Headers:
  - `Authorization`: `Bearer <token_copiado>`

---

## Variáveis de Ambiente (.env)

```env
PORT=3000
JWT_SECRET=sua-chave-secreta

NEXTFIT_BASE_URL=https://api.nextfit.com.br
NEXTFIT_USER=seu@email.com
NEXTFIT_PASSWORD=sua_senha
NEXTFIT_CODIGO_UNIDADE=12345
NEXTFIT_ACCESS_TOKEN=token_da_nextfit
```

---

## Estrutura do Projeto

```
BackendNextFit/
├── src/
│   ├── config/
│   │   └── env.js              # Variáveis de ambiente
│   ├── controllers/
│   │   ├── auth.controller.js  # Lógica de login
│   │   └── clientes.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js  # Validação do JWT
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── clientes.routes.js
│   ├── services/
│   │   └── nextfit/
│   │       ├── auth.service.js
│   │       └── nextfit.service.js
│   └── server.js
├── frontend/                   # React + Vite
├── .env
└── package.json
```
