const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json()); //pq estou utilizando o json para passar as informações, aí faço q isso seja convertido em um objeto 
app.use(routes);
app.use(errors());
module.exports = app;

/*Métodos HTTP
GET -busca
POST -  cria 
PUT - altera   
DELETE - deleta ---> informação back
*/

/* tipos de parametros:
query params: parametros nomeados enviados na rota para filtros, paginação, etc....estão após o ?
ex: listar
route params: identificar recursos. Ex: /:id 
request body: corpo da requisição - criar ou alterar recursos 
*/

/* bancos de dados
SQL: mysql, postgresql, SQLite
NoSQL: mongo, firebase


#no banco:
driver: são as buscas q já fazia com php estruturado, onde escrevia td a query...desvantajoso, pq a query varia entre os bancos 

query: usa padrões e funções prontas que se adaptam a qqr tipo de banco 
*/