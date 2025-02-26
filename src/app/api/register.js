import mysql from 'mysql2'; // Use 'mysql2' instead of 'mysql'
import bcrypt from 'bcryptjs';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "edupulse",
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to the database');
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Check if email exists
      const checkQuery = "SELECT * FROM admins WHERE email = ?";
      db.query(checkQuery, [email], (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ message: "Database error" });
        }

        if (result.length > 0) {
          return res.status(400).json({ message: "Email already exists." });
        }

        // Hash password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            console.error("Hashing error:", err);
            return res.status(500).json({ message: "Error hashing password." });
          }

          // Insert new admin
          const insertQuery = "INSERT INTO admins (username, email, password) VALUES (?, ?, ?)";
          db.query(insertQuery, [username, email, hashedPassword], (err, result) => {
            if (err) {
              console.error("Insert error:", err);
              return res.status(500).json({ message: "Error saving data." });
            }

            return res.status(200).json({ message: "Admin registered successfully!" });
          });
        });
      });

    } catch (error) {
      console.error("Request processing error:", error);
      res.status(400).json({ message: "Invalid request format." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
