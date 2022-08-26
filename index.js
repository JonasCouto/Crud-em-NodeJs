const express = require("express");
const app = express();
const hbs = require('express-handlebars');
// config template Engine
const bodyParse = require('body-parser');
const Post = require('./models/Post') 
// const moment = require('moment');

// ----------------------------------------------------------------------------------
// Config bodyParse
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

// Config handlebars
app.engine('handlebars', hbs.engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
    },    
}));
app.set('view engine', 'handlebars');


// --------------------------------------------------------------------------------------
// READ LISTAR Rota Principal
app.get('/', function(req, res){
  Post.findAll()
  .then(function(posts){
    res.render('home', {posts: posts});
    })
  })


// ---------------------------------------------------------------------------------------
// ROTA que renderiza o formulario de cadastro
app.get('/cad', function (req, res) {
  res.render('formulario');
});


// ----------------------------------------------------------------------------------------
// INSERT Rota para pegar dados do formulario HTML, salvando no objeto POST, banco - MySql.
app.post('/add', function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
  .then(function(){
    // res.send('Post criado com Sucesso. ')
    res.redirect('/')
  })
  .catch(function(error){
    res.send('Erro na criação do Post' + error)
  })
});


// DELETAR
app.get('/deletar/:id', function(req, res){
  Post.destroy({where: {'id': 6}})
  .then(function(){
    res.send('Postagem deletada com sucesso. ')
  }).catch(function(error){
    res.send('Erro ao deletar..' + error)
  })
})




// ------------------------------------------------
// instanciando o servidor localhost
app.listen(8081, () => {
console.log('Servidor rodando na porta 8081')
})
