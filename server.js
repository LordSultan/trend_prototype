const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

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

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
