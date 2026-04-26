import express from 'express';
import {
  submitContact,
  getContacts,
  markAsRead,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);
router.get('/', getContacts);
router.put('/:id', markAsRead);
router.delete('/:id', deleteContact);

export default router;