// src/database.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import dotenv from 'dotenv';
dotenv.config();

sqlite3.verbose();

export const getDb = async () => {
  const db = await open({
    filename: process.env.DATABASE_PATH || './mydb.sqlite',
    driver: sqlite3.Database
  });
  console.log('Connected successfully to SQLite database.');
  return db;
};

export const initializeDatabase = async () => {
  try {
    const db = await getDb();

    // Create the contacts table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        additionalInfo TEXT
      )
    `);

    console.log('Database initialization successful.');
    return db;
  } catch (error) {
    console.error('Failed to connect to the SQLite database:', error);
  }
};
