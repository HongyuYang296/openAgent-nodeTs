import * as ContactDAL from '../dals/contactDAL.js';
import { updateContactStatus } from '../dals/contactDAL.js';
import { Contact } from '../models/contact.js';

// Fetch all contacts
export const getAllContacts = async (): Promise<Contact[]> => {
  return ContactDAL.getAllContacts();
};

// Add a new contact
export const addContact = async (contact: Contact): Promise<void> => {
  return ContactDAL.addContact(contact);
};

// Fetch a single contact
export const getContact = async (id: number): Promise<Contact | undefined> => {
  return ContactDAL.getContactById(id);
};

// Update a contact
export const updateContact = async (id: number, contact: Contact): Promise<void> => {
  return ContactDAL.updateContact(id, contact);
};

// Delete a contact
export const deleteContact = async (id: number): Promise<void> => {
  return ContactDAL.deleteContact(id);
};

//Update status
export const changeContactStatus = async (contactId: number): Promise<void> => {
  const status = 'Verified'; // Hardcode the status to "Verified"

  if (!contactId) {
    throw new Error('Invalid input');
  }

  await updateContactStatus(contactId, status);
};
