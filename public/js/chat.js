var chatServer = io.connect('/chat_server'),
    chatClient = io.connect('/chat_client');

chatServer.on('name_set', function (user){
    $('#nameform').hide();
    $('#messages').append('<div class="systemMessage">' + 'Hello ' + user.name + '</div>');

    chatServer.on('user_entered', function(newUser){
        $('#messages').append('<div class="systemMessage">' + newUser.name + ' has joined the room' + '</div>')
    });

    chatServer.on('message', function(message){
        var data = JSON.parse(message);
        $('#messages').append('<div class="' + data.type + '">' + data.message + '</div>');
    });

    chatClient.on('message', function(message){
        var data = JSON.parse(message);
        if(data.name){
            $('#messages').append('<div class="' + data.type + '">'+ data.name + ':' + data.message + '</div>')
        } else {
            $('#messages').append('<div class="' + data.type + '">' + data.message + '</div>')
        }
    });

    $('#send').click(function(){
        var data = user;

        data.message = $('#message').val();
        data.type = 'userMessage';

        chatClient.send(JSON.stringify(data));
        $('#message').val('');
    });
});

$(function(){
    $('#setname').click(function(){
        chatServer.emit('set_name', {
            name: $('#nickname').val()
        })
    });
});
