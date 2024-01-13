const express = require('express');
require('dotenv').config();
const connectDB = require('./db');

const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(express.json());

connectDB();

// Resource to get all the contacts
app.use('/api', contactRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});