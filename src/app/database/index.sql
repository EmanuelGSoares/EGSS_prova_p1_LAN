CREATE DATABASE IF NOT EXISTS mydatabase;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS products(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    category_id UUID,
    FOREIGN KEY (category_id) REFERENCES categories (id)
);