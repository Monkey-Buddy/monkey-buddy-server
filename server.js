const express = require('express');
const db = require('./src/config/db');

const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});