const express = require('express');
const db = require('./src/config/db');

const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

// app.get('/', async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM users'); // Example query
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});