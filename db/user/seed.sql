CREATE TABLE tale_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    profile_pic TEXT
);

CREATE TABLE tale_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    content TEXT,
    img TEXT,
    author_id INT REFERENCES tale_users(id),
    date_created TIMESTAMP
)

