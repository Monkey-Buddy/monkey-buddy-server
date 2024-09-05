const userModel = require('../models/user_model');

async function createUser(req, res) {
  const { email, passwordHash, oauthProvider, oauthId, firstName, lastName, profilePictureUrl, bio } = req.body;
  try {
    const userId = await userModel.createUser(email, passwordHash, oauthProvider, oauthId, firstName, lastName, profilePictureUrl, bio);
    res.status(201).json({ userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserById(req, res) {
  const userId = req.params.userId;
  try {
    const user = await userModel.getUserById(userId);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  const fields = req.body;
  const userId = parseInt(req.params.userId);

  try {
    const updatedUser = await userModel.updateUser(userId, fields);
    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  const userId = req.params.userId;
  try {
    const deletedUser = await userModel.deleteUser(userId);
    res.status(200).json({ deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
}