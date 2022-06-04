const express = require('express');
const bodyParser = require('body-parser');
const db = require('./controller');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.json('Express application working ...');
});
app.get('/students', db.getStudents);
app.get('/students/:id', db.getStudentsById);
app.post('/addStudent', db.addStudents);
app.put('/upStudent/:id', db.updateStudents);
app.delete('/deleteStudent/:id', db.deleteStudents);

app.listen(port, () => {
    console.log('Server Started');
})