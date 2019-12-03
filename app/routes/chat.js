const { check, validationResult } = require("express-validator"); 

module.exports = function(application) {
    application.post('/chat', [
        check('apelido', 'Apelido é obrigatório!').notEmpty(),
        check('apelido', 'Apelido deve ser entre 3 e 15 caracteres!').isLength({ min: 3, max: 15 })
    ], (req, res) => {
        var errors = validationResult(req);
        application.app.controllers.chat.iniciaChat(application, req, res, errors);
    })

    application.get('/chat', (req, res) => {
        application.app.controllers.chat.iniciaChat(application, req, res);
    })
}