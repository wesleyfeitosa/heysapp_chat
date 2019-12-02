module.exports.iniciaChat = function(application, req, res, errors) {
    var dadosForm = req.body;

    if(!errors.isEmpty){
        res.render('index', { erros: errors.mapped() });
    } else {
        res.render('chat');
    }
    
}