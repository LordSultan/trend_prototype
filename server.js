const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: 'auth-db1710.hstgr.io',
  user: 'u685039389_tester',
  password: 'Jr8$17f&&RG',
  database: 'u685039389_test'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);  // Stop app if DB connection fails at start
  } else {
    console.log('Connected to the database');
  }
});

app.get('/api/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

db.on('error', (err) => {
  console.error('Database error:', err);
  // Optionally try to reconnect here or handle gracefully
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
