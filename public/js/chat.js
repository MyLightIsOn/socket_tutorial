var socket = io.connect('/');

socket.on('name_set', function(data){
    $('#nameform').hide();
    $('#messages').append('<div class="systemMessage">' + 'Hello ' + data.name + '</div>');

    $('#send').click(function(){
        data.message = $('#message').val();
        data.type = 'userMessage';

        socket.send(JSON.stringify(data));
        $('#message').val('');
    });

    socket.on('message', function(data){
        data = JSON.parse(data);
        if(data.name){
            $('#messages').append('<div class="' + data.type + '">'+ data.name + ':' + data.message + '</div>')
        } else {
            $('#messages').append('<div class="' + data.type + '">' + data.message + '</div>')
        }
    });
});

socket.on('user_entered', function(newUser){
    $('#messages').append('<div class="systemMessage">' + newUser.name + ' has joined the room' + '</div>')
});

$(function(){

    $('#setname').click(function(){
       socket.emit('set_name', {
           name: $('#nickname').val()
       })
    });
});