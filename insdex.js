const { query } = require('express');
const express = require('express');
const app = express();
const port = 3000

const urlencodedParser = express.urlencoded({extended: false})//Значение extended: false указывает, 
//что объект - результат парсинга будет представлять набор пар ключ-значение, а каждое значение может быть представлено в виде строки или массива.
app.get('/', (req, res) => {
  res.redirect('/list')
})

app.get('/list', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/Create', urlencodedParser, (req, res) => {
  if(!req.body) {return res.sendStatus(400);}
  console.log(req.body);
  res.send(`${req.body.DataUser}`);
})

app.listen(port, () => {
    console.log(`Сервер работает на порте ${port}`)
})