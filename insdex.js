const { query } = require('express');
const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {

    var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

      var d = new Date();
      var n = d.getDay();
      
    //console.log(req.query)
    // http://localhost:3000/?name=John
    res.send(`Hello ${req.query.name}, today is ${days[n]}`);
})

app.listen(port, () => {
    console.log(`Сервер работает на порте ${port}`)
})