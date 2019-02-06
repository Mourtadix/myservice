var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.json({'msg': 'Hello World! x 2'})
});

var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('server started');
});
