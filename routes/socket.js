var io = require('socket.io');

exports.initialize = function(server){
    io = io.listen(server);

    var chatServer = io.of('/chat_server'),
        chatClient = io.of('/chat_client');

    chatServer.on('connection', function(socket){

        socket.on('set_name', function(data){
            socket.emit('name_set', data);
            socket.broadcast.emit('user_entered', data);
            socket.send(JSON.stringify({
                type: 'serverMessage',
                message: 'Welcome to the chatroom'
            }))
        })

    });

    chatClient.on('connection', function(socket){
        socket.on('message', function(message){

            message = JSON.parse(message);
            if(message.type == 'userMessage'){
                socket.broadcast.send(JSON.stringify(message));
                message.type = 'myMessage';
                socket.send(JSON.stringify(message))
            }
        });
    });
};