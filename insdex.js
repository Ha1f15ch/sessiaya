const express = require('express');
const fs = require('fs');

const port = 3000
const app = express();

const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

const filePath = "students.json";

app.get('/', (req, res) => {
  res.redirect('/api/students');
})

//Все студенты из списка
app.get('/api/students', (req, res) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const students = JSON.parse(content);
  res.send(students);
})

//Один студент
app.get('/api/students/:id', (req, res) => {
  const id = req.params.id; //записываем id
  const content = fs.readFileSync(filePath, "utf-8");
  const students = JSON.parse(content);
  let stud = null;
  for(let i = 0; i < students.length; i++) {
    if(students[i].id==id) {
      stud = students[i];
      break;
    }
  }
  if(stud) {
    res.send(stud);
  } else {
    res.status(404).send();
  }
});

app.post("/api/students", jsonParser,  (req, res) => {
      
  if(!req.body) return res.sendStatus(400);
    
  const StfirstName = req.body.firstName;
  const StlastName = req.body.lastName;
  const Stgroup = req.body.group;
  let stud = {firstName: StfirstName, lastName: StlastName, group: Stgroup};
    
  let data = fs.readFileSync(filePath, "utf-8");
  let students = JSON.parse(data);
    
  // находим максимальный id
  const id = Math.max.apply(Math,students.map(function(o){return o.id;}))
  // увеличиваем его на единицу
  stud.id = id+1;
  // добавляем студента в массив
  students.push(stud);
  data = JSON.stringify(students);
  // перезаписываем файл с новыми данными
  fs.writeFileSync("students.json", data);
  res.send(stud);
});

//удаление студента по id
app.delete('/api/students/:id', (req, res) => {
  const id = req.params.id;
  let data = fs.readFileSync(filePath, 'utf-8');
  let students = JSON.parse(data);
  let index = -1;
  //поиск студента в массиве
  for(let i = 0; i < students.length; i++) {
    if(students[i].id==id) {
      index = i;
      break;
    }
  }
  if(index > -1) {
    //удаляем
    const stud = students.splice(index, 1)[0];
    data = JSON.stringify(students);
    fs.writeFileSync('students.json', data);
    //выводим удаленного студента
    res.send(stud);
  } else {
    res.status(404).send();
  }
});

//изменение студента
app.put('/api/students', jsonParser, (req, res) => {
  if(!req.body) return res.sendStatus(400);

  const stId = req.body.id;
  const stFirstName = req.body.firstName;
  const stLastName = req.body.lastName;
  const stGroup = req.body.group;

  let data = fs.readFileSync(filePath, 'utf-8');
  const students = JSON.parse(data);
  let stud;
  for(let i = 0; i < students.length; i++) {
    if(students[i].id==stId) {
      stud = students[i];
      break;
    }
  }
  //изменения данных
  if(stud) {
    stud.firstName = stFirstName;
    stud.lastName = stLastName;
    stud.group = stGroup;
    data = JSON.stringify(students);
    fs.writeFileSync('studenst.json', data);
    res.send(stud);
  } else {
    res.status(404).send(stud);
  }
});

app.listen(port, () => {
    console.log(`Сервер работает на порте ${port}`)
})