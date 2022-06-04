"use strict";

var _require = require('pg'),
    Client = _require.Client;

var client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "pass1!2@",
  database: "STUDENTS"
});
module.exports = client;