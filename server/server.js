var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var port = 4040;

app.use(cors())
app.use('/static', express.static(path.join(__dirname, 'assets')))

app.listen(port, function() {
  console.log('server up and running at port: http://localhost:%s', port);
});