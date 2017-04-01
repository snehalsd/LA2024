var app = require('express')();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.render(__dirname+'/index.html');
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.end('Hello World\n');
});

/*io.on('connection', function(socket){
  console.log('a user connected');
     socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
    socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});*/

app.listen(process.env.PORT || 1337);
    