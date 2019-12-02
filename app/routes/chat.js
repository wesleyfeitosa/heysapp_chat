const { check, validationResult } = require("express-validator"); 

module.exports = function(application) {
    application.post('/chat', [
        check('apelido').exists(),
        check('apelido').isLength({ min: 3, max: 15 })
    ], (req, res) => {
        var errors = validationResult(req);
        application.app.controllers.chat.iniciaChat(application, req, res, errors);
    })

    application.get('/chat', (req, res) => {
        application.app.controllers.chat.iniciaChat(application, req, res);
    })
}