var express = require("express");
var app = express();
var hbs = require('express-handlebars');
var Sequelize = require('sequelize');
// config template Engine
app.engine('handlebars', hbs.engine({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Conectando no banco de dados MYSQL
const sequelize = new Sequelize('usuarios', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });;



app.get('/cad', function (req, res) {
  res.render('formulario');
});



// instanciando o servidor localhost
app.listen(8081, () => {
console.log('Servidor rodando na porta 8081')
})
