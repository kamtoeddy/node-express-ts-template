import express from 'express';
const router = express.Router();

import authRoutes from './auth';

router.use('/auth', authRoutes);

router.use((req, res) => {
  res.status(404).json({ data: 'Resource not found', success: false });
});

export default router;
