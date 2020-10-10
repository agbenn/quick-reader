var express = require('express');
var app = express();
getToken()
setInterval(function () {
    getToken()
}, 60 * 60 * 1000);
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

function getToken(){
    fs = require('fs');
    var spawn = require("child_process").spawn;
    var process = spawn('gcloud', ['auth', 'print-identity-token']);
    process.stdout.on('data', function (data) {
        fs.writeFile('/token.txt', data, function (err) {
            if (err) return console.log(err);
        });
    });
    process.on('error', function () {
        console.log("Failed to start child.");
    });
    process.on('close', function (code) {
        console.log('Child process exited with code ' + code);
    });
}
