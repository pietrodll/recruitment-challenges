CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    pwd_hash VARCHAR(255),
    credit INTEGER
);
