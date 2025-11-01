// File: backend/routes/user.js
const express = require('express');
const User = require('../models/User');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// GET current notification status
router.get('/notifications', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({ notificationsEnabled: user.notificationsEnabled || false });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// PATCH /api/user/notifications
router.patch('/notifications', authenticateToken, async (req, res) => {
  try {
    const { enabled } = req.body;
    if (enabled === undefined) return res.status(400).json({ error: 'Missing enabled field' });

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { notificationsEnabled: enabled },
      { new: true }
    );

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({ notificationsEnabled: user.notificationsEnabled });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update notifications' });
  }
});

module.exports = router;

module.exports = router;
