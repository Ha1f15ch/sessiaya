"use strict";

var express = require('express');

var app = express();

var client = require('./connection');

var port = 3000;
app.get('/', function (req, res) {
  res.send('Home Page!!');
});
app.listen(port, function () {
  console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u043F\u043E\u0440\u0442\u0435 ".concat(port));
});