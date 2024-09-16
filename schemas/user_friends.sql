CREATE TABLE IF NOT EXISTS user_friends (
    id SERIAL PRIMARY KEY,
    follower_id INT REFERENCES users(id) ON DELETE CASCADE,
    followed_id INT REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
    UNIQUE (follower_id, followed_id)
);

CREATE INDEX idx_follower_id ON user_friends(follower_id);
CREATE INDEX idx_followed_id ON user_friends(followed_id);
