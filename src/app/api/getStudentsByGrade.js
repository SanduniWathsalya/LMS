// backend/routes/getStudentsByGrade.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// DB connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'edupulse'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// API endpoint
router.get('/:grade', (req, res) => {
  const grade = req.params.grade;

  const tableName = `grade${grade}`;

  const sql = `SELECT * FROM ??`;
  connection.query(sql, [tableName], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'DB error', details: err });
    }
    res.json(results);
  });
});

module.exports = router;
