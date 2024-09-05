const pool = require('../config/db');

const User = {
  async getAllUsers() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  },

  async getUserById(userId) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0];
  },

  async createUser(email, username, passwordHash, oauthProvider, oauthId, firstName, lastName, profilePictureUrl, bio) {
    const result = await pool.query(
      `INSERT INTO users (email, username, password_hash, oauth_provider, oauth_id, first_name, last_name, profile_picture_url, bio)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
      [email, username, passwordHash, oauthProvider, oauthId, firstName, lastName, profilePictureUrl, bio]
    );
    return result.rows[0].id;
  },

  async updateUser(userId, fields) {
    const setClause = Object.keys(fields).map((key, i) => `${key} = ${i + 2}`).join(", ");
    const values = [userId, ...Object.keys(fields)];

    const result = await pool.query(
      `UPDATE users SET ${setClause}, updated_at = NOW() WHERE id = $1 RETURNING *`,
      values
    );
    return result.rows[0];
  },

  async deleteUser(userId) {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    return result.rows[0];
  },

  async findUserByEmail(email) {
    const result = await pool.query('SELECT * FROM users where email = $1', [email]);
    return result.rows[0];
  }
}

module.exports = User;