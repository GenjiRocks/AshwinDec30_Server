const mysql = require("mysql2/promise");


const pool = mysql.createPool({
  host: 'localhost'  ,
  user: 'root' ,
  password: '2356' ,
  database: 'students_test' ,
});

module.exports = pool;
