<h1 align="center">📚 Escola API - Node + Sequelize + MySQL</h1>

<p align="center">
API para administração de escola
</p>

# ⚙️ Funcionalidades

- Cadastro, consulta, atualização e remoção de pessoas, turmas, matrículas e níveis;
- Consulta de matrículas por turma;
- Consulta de turmas lotadas;
- Consulta de matrículas por estudante;
- Possibilidade de cancelamento de estudante (modifica status para inativo e cancela todas as matrículas vinculadas);
- Remoção de pessoa sem perda do registro no banco (paranoid) e possibilidade de restauração;


# 🛠️ Tecnologias utilizadas

As seguintes tecnologias foram utilizadas:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

# 🚀 Como executar o projeto
### Primeiro, clone o projeto:
```bash
$ git clone https://github.com/joaodslourenco/escola-api.git
```

### Entre na pasta do projeto e, na raiz, rode o comando:
```bash
yarn 
```
OU
```bash
npm install
```

### Crie um arquivo .env na raiz do projeto, definindo as seguintes variáveis:

```bash
PORT=(chave secreta)
```
#### OBS: caso você não tenha as chaves das variáveis, o projeto ainda poderá ser executado utilizando porta e banco de dados local.

## Para rodar o projeto, basta executar os seguintes comandos

```bash
yarn dev
```
OU
```bash
npm run dev
```

## Diagrama relacional

![Captura de tela 2022-08-04 094426](https://user-images.githubusercontent.com/90736469/182850419-e8924024-f56c-46a6-ba41-8ebc02ac4b20.png)


## Rotas da API

Para começar a utilizar a API, com o servidor sendo executado, utilize o Postman ou Insomnia para fazer requisições às rotas, conforme exposto na tabela abaixo:

### Pessoas e matrículas
| Função | Tipo de requisição | Campos necessários (body) | Rota |
|--------|--------------------|-------------------------|------|
| Consultar pessoas | GET | N/A | "/pessoas"
| Consultar pessoas ativas | GET |  N/A  | "/pessoas/ativas" |
| Consultar pessoa específica | GET | N/A | "/pessoas/:id" |
| Consultar matrículas por turma | GET | N/A | "/pessoas/matricula/:turmaId/confirmadas" |
| Consultar turmas lotadas | GET | N/A | "/pessoas/matricula/lotada" |
| Consultar matrículas por pessoa específica | GET | N/A | "/pessoas/:estudanteId/matricula" |
| Consultar uma matrícula específica específica | GET | N/A | "/pessoas/:estudanteId/matricula/:matriculaId" |
| Cadastrar nova pessoa | POST | {<br>"nome": "abc", <br> "ativo": true/false, <br> "email": "abc", <br> "role": "abc" <br>} | "/pessoas" | 
| Cadastrar nova matrícula | POST | {<br>"status": "abc", <br>"turma_id": 123 <br>} | "/pessoas/:estudanteId/matricula" |
| Restaurar uma pessoa | POST | N/A | "/pessoas/:id/restaura" |
| Cancelar uma pessoa | POST | N/A | "/pessoas/:estudanteId/cancela" |
| Restaura uma matrícula | POST | N/A | "/pessoas/:estudanteId/matricula/:matriculaId/restaura" |
| Atualizar pessoa | PUT | {<br> "campo a ser atualizado": "novo valor" <br>} | "/pessoas/:id" |
| Atualizar matrícula | PUT | {<br> "campo a ser atualizado": "novo valor" <br>} | "/pessoas/:estudanteId/matricula/:matriculaId" |
| Deletar pessoa | DELETE | N/A  | "/pessoas/:id" |
| Deletar matrícula | DELETE | N/A  | "/pessoas/:estudanteId/matricula/:matriculaId" |



### Turmas
| Função | Tipo de requisição | Campos necessários (body) | Rota |
|--------|--------------------|:-------------------------:|------|
| Consultar turmas | GET | N/A | "/turmas" |
| Consultar turma específica | GET | N/A | "/turmas/:id" |
| Cadastrar nova turma | POST | {<br>"data_inicio": "abc" <br>} | "/turmas" |
| Atualizar uma turma | PUT | {<br> "campo a ser atualizado": "novo valor" <br>} | "/turmas/:id" |
| Deletar uma turma | DELETE | N/A | "/turmas/:id" |
| Restaurar uma turma | POST | N/A | "/turmas/:id/restaura" |

### Níveis
| Função | Tipo de requisição | Campos necessários (body) | Rota |
|--------|--------------------|:-------------------------:|------|
| Consultar níveis | GET | N/A | "/niveis" |
| Consultar nível específico | GET | N/A | "/niveis/:id" |
| Cadastrar novo nível | POST | {<br>"descr_nivel": "abc" <br>} | "/niveis" |
| Atualizar um nível | PUT | {<br> "campo a ser atualizado": "novo valor" <br>} | "/niveis/:id" |
| Deletar um nível | DELETE | N/A | "/niveis/:id" |
| Restaurar um nível | POST | N/A | "/niveis/:id/restaura" |
