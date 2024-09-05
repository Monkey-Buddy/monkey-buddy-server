CREATE TABLE schedule_entries (
    id SERIAL PRIMARY KEY,
    day_of_week VARCHAR(9) NOT NULL, -- 'Monday', 'Tuesday', etc.
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE (day_of_week, start_time, end_time)
);