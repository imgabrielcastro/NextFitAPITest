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

API Endpoints

### Listar clientes
```
GET /api/clientes
```

### Buscar cliente por ID
```
GET /api/clientes/:id
```

### Cadastrar cliente
```
POST /api/clientes
Content-Type: application/json
```

Exemplo de payload:
```json
{
  "Nome": "João Silva",
  "Email": "joao@email.com",
  "Cpf": "12345678900",
  "Rg": "1234567",
  "Sexo": 1,
  "DataNascimento": "1990-05-15T03:00:00.000Z",
  "DddFone": "48",
  "Fone": "999999999",
  "NotificarWhatsApp": true,
  "Cep": "88000000",
  "Endereco": "Rua Principal",
  "NumEndereco": "100",
  "Bairro": "Centro",
  "CodigoCidade": 4481,
  "CodigoObjetivo": 81895,
  "CodigoUsuarioConsultor": 15104057
}
```

Observações

O backend precisa estar rodando antes do frontend.

Se der erro 401 ou 403, provavelmente o token expirou.
