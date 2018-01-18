var express = require('express');
var basicAuth = require('express-basic-auth');

var app = express();
var PORT = process.env.PORT || 8100;

app.use(basicAuth({
    users: { 'unity@emilence.com': 'Emilence@1' }
}));

app.get('/test_connection', function(req, res) {
    res.json({ success: 1, msg: 'success'});
});




var server = app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT + '!');
});
server.timeout = 2500;
