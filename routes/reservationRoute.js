const express = require('express');
const router  = express.Router();
const Reservation = require('./models/reservation');

router.post('/', async (req, res) => {
  const rsv = await Reservation.create(req.body);
  res.status(201).json({ success: true, data: rsv });
});

module.exports = router;
