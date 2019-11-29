// importar o módulo do framework express
const express = require('express');
// importar o módulo do consign
const consign = require('consign');
// importar o módulo do body-parser
const bodyParser = require('body-parser');
// importar o módulo do express-validator
const expressValidator = require('express-validator');

// iniciar o objeto do express
const app = express();

// setar as variáveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configurar o middleware express.static
app.use(express.static('./app/public'));
// configurar o middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// auto carregamento automático dos módulos mvc da nossa aplicação
consign()
    .include('app/controllers')
    .then('app/models')
    .then('app/routes')
    .into(app)

// exportar o objeto app
module.exports = app;