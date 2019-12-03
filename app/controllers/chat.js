module.exports.iniciaChat = function(application, req, res, errors) {

    var dadosForm = req.body;

    if(!errors.isEmpty()){
        res.render('index', { validacao: errors.errors });
        return;
    } else {
        // emição de mensagens do servidor para o cliente através do socket.io
        application.get('io').emit(
            'msgParaCliente',
            {
                apelido: dadosForm.apelido,
                mensagem: ' acabou de entrar no chat'
            } // estrutura de dados que podemos enviar no emit 
        );  
        res.render('chat', { dadosForm: dadosForm });
    }
    
}