// Conectando no banco de dados MYSQL
const Sequelize = require('sequelize');
const sequelize = new Sequelize('usuarios', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });;

// verificando se teve sucesso na conexão com o banco
sequelize.authenticate().then(()=>{
    console.log('Conexão foi realizada com sucesso! ');
}).catch((error)=>{
   console.error('Não foi possivel conectar há esta database: '+error);
})

// criando tabela de usuarios no banco de dados
const User = sequelize.define('users', {
  nome:{
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING
  },
  login:{
    type: Sequelize.STRING
  },
  senha:{
    type: Sequelize.STRING
  }
})
// Criando a tabela no banco após o modal USER
// User.sync({ force: true });




// criando tabela de postagens no banco de dados
const Postagem = sequelize.define('postagens', {
  titulo:{
    type: Sequelize.STRING
  },
  conteudo:{
    type: Sequelize.STRING
  }
})
// Criando a tabela no banco após o modal Postagem
// Postagem.sync({ force: true });



// Inserindo dados na tabela de User
// User.create({
//   nome: 'Jonas Couto',
//   email: "jonas-couto@teste.com",
//   login: "jonascouto",
//   senha: '12345'
// });
