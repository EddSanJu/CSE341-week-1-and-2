const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const { swaggerDocs: V1SwaggerDocs } = require('./swagger');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(express.json());

connectDB();

// Resource to get all the contacts
app.use('/api', contactRoutes);

// Root
app.get('/', (req, res) => {
  res.send(`API Docs available at route "URL/api/docs"`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
