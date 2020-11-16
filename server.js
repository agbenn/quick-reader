var express = require('express');
var app = express();



app.use(express.static('www/'));
app.get('/', function (req, res,next) {
    res.redirect('/');
});
app.get('/search', function (req, res,next) {
    res.redirect('/');
});
app.get('/newsReader', function (req, res,next) {
    res.redirect('/');
});
app.listen(8100)

