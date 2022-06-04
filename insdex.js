const express = require('express')
const client = require('./connection');
const app = express()

app.listen(3000, () => {
  console.log('Сервер запущен')
});

client.connect();
