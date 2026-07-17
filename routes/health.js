const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Express + PostgreSQL starter is running' });
});

router.get('/time', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as now');
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Database query failed' });
  }
});

module.exports = router;
