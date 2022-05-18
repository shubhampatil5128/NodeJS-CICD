var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "The application is working fine" }');
});

app.get('/offer', function (req, res) {
    res.send('{ "response": "samsung":"Samsung 10% Discount","adidas":"Adidas Shoe 70% Off","nikeshoe":"Nike Sports Shoe 50% off" }');
});
app.get('/shoe', function (req, res) {
    res.send('{ "response": "tommy":"Tommy Hilfiger Shoe","adidas":"Adidas Running Shoe","nikeshoe":"Nike Sports Shoe" }');
});
app.get('/wishlist', function (req, res) {
    res.send('{ "response": "1": "Apple Iphone", "2": "MacBook", "3": "Your Fav Something else"}');
});
app.get('/cart', function (req, res) {
    res.send('{ "response":"data":[{"itemNo":1,"item":"Nike Shoe"},{"itemNo":2,"item":"Tommy Hilfiger Shirt"},{"itemNo":3,"item":"Calvin Klien Trousers" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
