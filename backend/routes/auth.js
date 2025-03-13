const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/api/check-auth', authMiddleware, (req, res) => {
    res.json({ authenticated: true });
});

module.exports = router;
