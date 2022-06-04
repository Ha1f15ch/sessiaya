const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'STUDENTS',
    password: 'pass1!2@',
    port: 5432,
})

const getStudents = (req, res) => {
    pool.query('SELECT * FROM studenst ORDER BY id ASC', (err, result) => {
        if(err) {
            throw err
        }
        res.status(200).json(result.rows)
    })
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM studenst WHERE id = $1', [id], (err, result) => {
        if(err) {
            throw err
        }
        res.status(200).json(result.rows)
    })
};

const addStudents = (req, res) => {
    const {id, first_name, last_name, group_name} = req.body

    pool.query('INSERT INTO studenst (id, first_name, last_name, group_name) VALUES ($1, $2, $3, $4)', [id, first_name, last_name, group_name], (err, result) => {
        if(err) {
            throw err
        }
        res.status(201).send(`Student added with ID: ${res.id}`)
    })
};

const updateStudents = (req, res) => {
    const id = parseInt(req.params.id)
    const {first_name, last_name, group_name} = req.body

    pool.query('UPDATE studenst SET first_name = $1, last_name = $2, group_name = $3 WHERE id = $4', [first_name, last_name, group_name, id], (err, result) => {
        if(err) {
            throw err
        }
        res.status(200).send(`Student modified with ID: ${id}`)
    })
};

const deleteStudents = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM studenst WHERE id = $1', [id], (err, result) => {
        if(err) {
            throw err
        }
        res.status(200).send(`Student deleted with ID: ${id}`)
    })
};

module.exports = {getStudents, getStudentsById, addStudents, updateStudents, deleteStudents}