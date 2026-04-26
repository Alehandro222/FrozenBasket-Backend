import express from 'express';
const router = express.Router();

// Temporary routes until you build them out
router.get('/', (req, res) => {
  res.json({ message: 'Orders route working' });
});

export default router;  // ← THIS IS IMPORTANT