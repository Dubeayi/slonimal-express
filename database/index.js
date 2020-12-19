// Update user and password
const mysql = require('mysql');
// const seeder = require('./seed.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'slonimal_db'
});

module.exports = db;