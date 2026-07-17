const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express + PostgreSQL starter is running');
});

app.use('/api/health', require('./routes/health'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});