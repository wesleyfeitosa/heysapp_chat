// importar as configurações do servidor
const app = require('./config/server');

// parametrizar a porta de escuta 
var server = app.listen(80, () => {
    console.log('Servidor ON');
});

var io = require('socket.io').listen(server);

// setando uma variável global
app.set('io', io);

/* criar conexão por websocket */
io.on('connection', function(socket) {
    console.log('Usuário conectou!');

    socket.on('disconnect', function(socketDisconnect) {
        console.log('Usuário desconectou!');
    });

    socket.on('msgParaServidor', function(data) {
        
        socket.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        )
        socket.broadcast.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        )
    });
});