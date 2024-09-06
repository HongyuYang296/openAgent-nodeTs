import express, { Request, Response } from 'express';
import * as ContactService from '../services/contactService.js';
import { changeContactStatus } from '../services/contactService.js';
const router = express.Router();

// Get all contacts
router.get('/contacts', async (req: Request, res: Response) => {
  const contacts = await ContactService.getAllContacts();
  res.json(contacts);
});

// Add a new contact
router.post('/contacts', async (req: Request, res: Response) => {
  await ContactService.addContact(req.body);
  res.status(201).send('Contact added');
});

// Get a single contact by ID
router.get('/contacts/:id', async (req: Request, res: Response) => {
  const contact = await ContactService.getContact(parseInt(req.params.id));
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).send('Contact not found');
  }
});

// Update a contact by ID
router.put('/contacts/:id', async (req: Request, res: Response) => {
  const contactId = parseInt(req.params.id);
  const existingContact = await ContactService.getContact(contactId);

  if (existingContact) {
    await ContactService.updateContact(contactId, req.body);
    res.status(200).send('Contact updated');
  } else {
    res.status(404).send('Contact not found');
  }
});

// Delete a contact by ID
router.delete('/contacts/:id', async (req: Request, res: Response) => {
  const contactId = parseInt(req.params.id);
  const existingContact = await ContactService.getContact(contactId);

  if (existingContact) {
    await ContactService.deleteContact(contactId);
    res.status(200).send('Contact deleted');
  } else {
    res.status(404).send('Contact not found');
  }
});

// PUT request to change status to "Verified"
router.put('/contacts/:id/status', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Call the service to update the status to "Verified"
    await changeContactStatus(Number(id));

    res.status(200).json({ message: 'Contact status updated to Verified' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update contact status' });
  }
});

export default router;
