
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./api/routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

// koneksi DB
mongoose
  .connect(process.env.DB_CONNECTION)
  // eslint-disable-next-line no-console
  .then(() => console.log('MongoDB Connected'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// jangan diubah lagi
