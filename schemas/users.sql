CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255), -- Nullable if using OAuth2
    oauth_provider VARCHAR(50), -- e.g., 'google', 'facebook'
    oauth_id VARCHAR(255) UNIQUE, -- OAuth2 provider's unique user ID
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    profile_picture_url TEXT, -- URL to the profile picture stored on S3 or Cloudinary
    bio TEXT, -- User's bio
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ
);