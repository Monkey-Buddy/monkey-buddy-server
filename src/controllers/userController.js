const userModel = require('../models/user_model');

async function createUser(req, res) {
  const { email, username, passwordHash, oauthProvider, oauthId, firstName, lastName, profilePictureUrl, bio } = req.body;
  try {
    const userId = await userModel.createUser(email, username, passwordHash, oauthProvider, oauthId, firstName, lastName, profilePictureUrl, bio);
    res.status(201).json({ userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createUser,
}