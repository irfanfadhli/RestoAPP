const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // folder HTML Anda

// Import & mount routes
app.use('/api/menus',       require('./routes/menuRoute'));
app.use('/api/reservations',require('./routes/reservationRoute'));

// Sinkronisasi & start server
(async () => {
  await sequelize.sync({ alter: true }); // buat tabel otomatis
  app.listen(process.env.PORT, () =>
    console.log(`Server running on http://localhost:${process.env.PORT}`)
  );
})();
