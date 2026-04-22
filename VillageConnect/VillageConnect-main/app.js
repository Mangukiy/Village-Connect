// app.js - simple VillageConnect demo
const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const dbConfig = {
  host: process.env.DB_HOST || 'REPLACE_DB_HOST',
  user: process.env.DB_USER || 'REPLACE_DB_USER',
  password: process.env.DB_PASS || 'REPLACE_DB_PASS',
  database: process.env.DB_NAME || 'villageconnect'
};

async function getConnection() {
  const conn = await mysql.createConnection(dbConfig);
  return conn;
}

app.get('/', async (req, res) => {
  const conn = await getConnection();
  const [rows] = await conn.execute('SELECT * FROM services ORDER BY id DESC');
  await conn.end();
  res.render('index', { services: rows });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', async (req, res) => {
  const { title, description, contact } = req.body;
  const conn = await getConnection();
  await conn.execute('INSERT INTO services (title, description, contact) VALUES (?, ?, ?)', [title, description, contact]);
  await conn.end();
  res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const conn = await getConnection();
  await conn.execute('DELETE FROM services WHERE id=?', [id]);
  await conn.end();
  res.redirect('/');
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log('VillageConnect app running on port', PORT));
