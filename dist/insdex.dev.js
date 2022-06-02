"use strict";

var _require = require('express'),
    query = _require.query;

var express = require('express');

var app = express();
var port = 3000;
var urlencodedParser = express.urlencoded({
  extended: false
}); //Значение extended: false указывает, 
//что объект - результат парсинга будет представлять набор пар ключ-значение, а каждое значение может быть представлено в виде строки или массива.

app.get('/', function (req, res) {
  res.redirect('/list');
});
app.get('/list', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post('/Create', urlencodedParser, function (req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  console.log(req.body);
  res.send("".concat(req.body.DataUser));
});
app.listen(port, function () {
  console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u043F\u043E\u0440\u0442\u0435 ".concat(port));
});