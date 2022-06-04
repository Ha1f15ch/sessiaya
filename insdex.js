const express = require('express');
const app = express();
const client = require('./connection');
const port = 3000


app.get('/', (req, res) => {
  res.send('Home Page!!')
})

app.listen(port, () => {
    console.log(`Сервер работает на порте ${port}`)
})