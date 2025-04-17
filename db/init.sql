CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

-- Insert user: username is case-insensitive, password is case-sensitive
INSERT INTO users (username, password)
VALUES ('interlix', 'pbkdf2:sha256:600000$S9qf7ZXY1IvHjR0h$5a7db70e676d305f3e79a7c8b4a80f98a1b43f8ff87dd6a35297d786b0f4e271');
