# Green-Cycle BACKEND

Nosso backend foi desenvolvido para gerenciar produtos e usuários, proporcionando funcionalidades robustas para uma experiência completa. Ele oferece diversas rotas e controladores que permitem criar, listar e buscar produtos por categorias, lojas, IDs e termos de pesquisa. Além disso, inclui rotas para registro e login de usuários, garantindo a segurança e personalização do acesso. Todos os dados são estruturados e manipulados por meio de modelos detalhados, assegurando a integridade e eficiência do sistema.


## Índice

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [API Endpoints](#api-endpoints)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Introdução

Uma breve introdução ao seu projeto, explicando o que ele faz e por que é útil.

## Funcionalidades

-Manipulação de banco de dados;

-Criação de uma API própria, disponível [aqui](https://green-cycle-ys6i.onrender.com);

-Criação de Esquemas e Modelos (GET e POST para usuários e produtos);

-Criação de rotas e controladores;

-Instalação e conexão com o [MongoDb](https://www.mongodb.com);

-Manipulação de Erros.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```env
PORT=3000
MONGODB_URI=sua-url-do-mongodb
TOKEN_KEY=sua-chave-secreta
   ```
## Execução

Para rodar o servidor em ambiente de desenvolvimento:

```
npm run dev
   ```
## API Endpoints

AUTENTICAÇÃO:
- POST: /login - Para login de usuários;
- POST: /register -Para cadastro de usuários.

PRODUTOS:
- POST: /products/new - Para criar novos produtos;
- GET: /products -Para acesso a todos os produtos;
- GET: /products/category/:category -Para acesso aos produtos de determinada categoria;
- GET: /products/company/:company -Para acesso aos produtos de determinada loja;
- GET: /products/feature -Para acesso aos produtos em destaque;
- POST: /products/search -Para pesquisar por produtos.


## Screenshots

Aqui estão algumas rotas que foram criadas:
![Products](https://github.com/vinib96/web_project_around_express/assets/141737376/54ad1b71-e39d-4e40-83e1-6ded8516683c)

![Users](https://github.com/vinib96/web_project_around_express/assets/141737376/4d5ef4c5-808e-42d9-b181-765ccfc65f41)


## Roadmap

- 

- .


<div align="center"><img src="https://user-images.githubusercontent.com/97989643/224550089-f2541ade-c5c6-4afa-8538-51a8dda4e23b.gif" /></div>
