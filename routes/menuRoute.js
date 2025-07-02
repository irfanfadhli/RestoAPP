const express = require('express');
const router  = express.Router();
const Menu    = require('../models/menu');

// GET all
router.get('/', async (req, res) => {
  const data = await Menu.findAll();
  res.json(data);
});

// POST new
router.post('/', async (req, res) => {
  const item = await Menu.create(req.body);
  res.status(201).json(item);
});

module.exports = router;
