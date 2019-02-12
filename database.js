var mongoose = require('mongoose');
var URI = 'mongodb://localhost:27017/relatorioHML';

mongoose.connect(URI,{useNewUrlParser: true})  
    .then(db => console.log('Banco de Dados Conectado com.... Database.js'))
    .catch(err => console.log('Erro de conexao..... Database.js', err));

module.exports = mongoose;