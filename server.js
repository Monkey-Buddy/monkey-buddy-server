const express = require('express');
const db = require('./src/config/db');
const { auth } = require('express-openid-connect');
require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use(auth(config));
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});