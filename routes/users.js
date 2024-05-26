var express = require('express');
var router = express.Router();

var mysql = require("mysql2")

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "NTIAwards!PSWRD2007",
  database: "Klasser",
  rowsAsArray: true
}).promise()


/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  const result = await pool.query(`SELECT * FROM a`);
  res.send(result)

});

module.exports = router;
