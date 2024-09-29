CREATE TYPE bouldering_level AS ENUM (
    'V0-V1', 'V2-V3', 'V4-V5', 'V6-V7', 'V8-V9', 
    'V10-V11', 'V12-V13', 'V14-V15', 'V16+'
);

CREATE TYPE top_rope_level AS ENUM (
    '5.2-5.5', '5.6-5.8', '5.9-5.10', '5.11-5.12a', '5.12b-5.13a', '5.13b-5.14a', '5.14b-5.14d', '5.15+'
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255), -- Nullable if using OAuth2
    oauth_provider VARCHAR(50), -- e.g., 'google', 'facebook'
    oauth_id VARCHAR(255) UNIQUE, -- OAuth2 provider's unique user ID
    profile_picture_url TEXT, -- URL to the profile picture stored on S3 or Cloudinary
    bio TEXT, -- User's bio
    height DECIMAL(4,1),
    weight DECIMAL(4,1),
    bouldering_level bouldering_level,
    top_rope_level top_rope_level,
    primary_gym VARCHAR(255),
    is_private_account BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ
);

