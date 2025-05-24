const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

function handleDisconnect() {
  const db = mysql.createConnection({
    host: 'auth-db1710.hstgr.io', // REMOVE https:// and trailing slash
    user: 'u685039389_testerr',
    password: 'Jr8$17f&&RG',
    database: 'u685039389_testt'
  });

  db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err);
      setTimeout(handleDisconnect, 2000); // Try again after 2 seconds
    } else {
      console.log('Connected to the database');
    }
  });

  db.on('error', (err) => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
      handleDisconnect(); // Reconnect on connection loss
    } else {
      throw err;
    }
  });

  // Attach db to app so routes can use it
  app.set('db', db);
}

handleDisconnect();

app.get('/api/employees', (req, res) => {
  const db = req.app.get('db');
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// app.post('/api/employees', (req, res) => {
//   const db = req.app.get('db');
//   const { firstName, lastName, email, position, phoneNumber, image } = req.body;
//   db.query(
//     'INSERT INTO employees (firstName, lastName, email, position, phoneNumber, image) VALUES (?, ?, ?, ?, ?, ?)',
//     [firstName, lastName, email, position, phoneNumber, image],
//     (err, result) => {
//       if (err) return res.status(500).json({ error: err });
//       res.json({ id: result.insertId, ...req.body });
//     }
//   );
// });
app.post('/api/employees', (req, res) => {
  const { firstName, lastName, email, position, phoneNumber, image } = req.body;
  db.query(
    'INSERT INTO employees (firstName, lastName, email, position, phoneNumber, image) VALUES (?, ?, ?, ?, ?, ?)',
    [firstName, lastName, email, position, phoneNumber, image],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, ...req.body });
    }
  );
});

// // Serve static files from the Angular dist directory
// app.use(express.static(path.join(__dirname, 'dist/trend-prototype')));

// // For any other route, serve index.html (for Angular routing)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/trend-prototype/index.html'));
// });

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
