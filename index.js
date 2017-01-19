var express = require('express');
var server = express();

var port = 8080; //think of this as the door number to the server

server.listen(8080, function(){
  console.log('Now listening on port', port);
});
