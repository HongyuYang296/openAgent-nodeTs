import { getDb } from '../database.js';
import { Contact } from '../models/contact.js';

// Fetch all contacts
export const getAllContacts = async (): Promise<Contact[]> => {
  const db = await getDb();
  return db.all('SELECT * FROM contacts');
};

// Add a new contact
export const addContact = async (contact: Contact): Promise<void> => {
  const { firstName, lastName, email, phone, additionalInfo } = contact;
  const db = await getDb();
  await db.run(`INSERT INTO contacts (firstName, lastName, email, phone, additionalInfo) VALUES (?, ?, ?, ?, ?)`, [
    firstName,
    lastName,
    email,
    phone,
    additionalInfo
  ]);
};

// Fetch a single contact by ID
export const getContactById = async (id: number): Promise<Contact | undefined> => {
  const db = await getDb();
  return db.get('SELECT * FROM contacts WHERE id = ?', [id]);
};

// Update a contact by ID
export const updateContact = async (id: number, contact: Contact): Promise<void> => {
  const { firstName, lastName, email, phone, additionalInfo } = contact;
  const db = await getDb();
  await db.run(
    `UPDATE contacts SET firstName = ?, lastName = ?, email = ?, phone = ?, additionalInfo = ? WHERE id = ?`,
    [firstName, lastName, email, phone, additionalInfo, id]
  );
};

// Delete a contact by ID
export const deleteContact = async (id: number): Promise<void> => {
  const db = await getDb();
  await db.run('DELETE FROM contacts WHERE id = ?', [id]);
};
