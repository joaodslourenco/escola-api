<h1 align="center">📚 Escola API - Node + Sequelize + MySQL</h1>

<p align="center">
API para administração de escola
</p>

# ⚙️ Funcionalidades

- Cadastro, consulta, atualização e remoção de pessoas;
- Cadastro, consulta, atualização e remoção de turmas;
- Cadastro, consulta, atualização e remoção de matrículas;
- Cadastro, consulta, atualização e remoção de níveis;

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
$ git clone https://github.com/joaodslourenco/livraria-api.git
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
MONGO_URL=(chave secreta)
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

## Rotas da API

Para começar a utilizar a API, com o servidor sendo executado, utilize o Postman ou Insomnia para fazer requisições às rotas, conforme exposto na tabela abaixo:


| Função | Tipo de requisição | Campos necessários (body) | Rota |
|--------|--------------------|:-------------------------:|------|
| Consultar livros | GET | N/A | "/books"
| Consultar livros pela publicadora | GET |  N/A  | "/books/search" |
| Consultar livro específico | GET | N/A | "/books/:id" |
| Cadastrar novo livro | POST | {<br>"title": "abc", <br> "author": "abc", <br> "publisher": "abc", <br> "pageNumber": 123 <br>} | "/books" | 
| Atualizar livro | PUT | {<br> "campo a ser atualizado": "novo valor" <br>} | "/books/:id" |
| Deletar livro | DELETE | N/A  | "/books/:id" |
| Consultar autores | GET | N/A | "/authors"
| Consultar autor específico | GET | N/A | "/authors/:id" |
| Cadastrar novo autor | POST | {<br>"name": "abc", <br> "nationality": "abc" <br>} | "/authors" | 
| Atualizar autor | PUT | {<br> "campo a ser atualizado": "novo valor" <br>} | "/authors/:id" |
| Deletar autor | DELETE | N/A  | "/authors/:id" |
