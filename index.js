var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "The application is working fine" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "The CICD pipeline for NodeJS application" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
