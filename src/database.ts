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

    // Check if the 'time' column exists and add it if not
    const tableInfo = await db.all(`PRAGMA table_info(contacts)`);

    const hasTimeColumn = tableInfo.some(column => column.name === 'time');
    const hasStatusColumn = tableInfo.some(column => column.name === 'status');

    if (!hasTimeColumn) {
      await db.exec(`
        ALTER TABLE contacts
        ADD COLUMN time TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
      `);
      console.log('Added "time" column to contacts table.');
    } else {
      console.log('"time" column already exists in contacts table.');
    }

    // Check if the 'status' column exists and add it if not
    if (!hasStatusColumn) {
      await db.exec(`
        ALTER TABLE contacts
        ADD COLUMN status TEXT NOT NULL DEFAULT 'Unverified'
      `);
      console.log('Added "status" column to contacts table.');
    } else {
      console.log('"status" column already exists in contacts table.');
    }

    console.log('Database initialization successful.');
    return db;
  } catch (error) {
    console.error('Failed to connect to the SQLite database:', error);
  }
};
