const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // update if you have one
  database: "edupulse", // replace with your DB name
});

// Add student to specific grade table
app.post("/api/add-student", (req, res) => {
  const { admission_no, name, email, registered_date, grade } = req.body;
  const sql = `INSERT INTO \`${grade}\` (admission_no, name, email, registered_date) VALUES (?, ?, ?, ?)`;

  db.query(sql, [admission_no, name, email, registered_date], (err, result) => {
    if (err) {
      console.error("Insert Error:", err);
      return res.status(500).json({ success: false });
    }
    res.json({ success: true });
  });
});

// Get students from specific grade table
app.get("/api/students/:grade", (req, res) => {
  const gradeTable = `grade${req.params.grade}`;
  const sql = `SELECT * FROM \`${gradeTable}\``;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Fetch Error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ students: results });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
