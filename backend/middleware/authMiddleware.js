// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];  // Extract token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.json({ authenticated: false });
            } else {
                req.user = decoded;  // Pass decoded user info
                return res.json({ authenticated: true });
            }
        });
    } else {
        return res.json({ authenticated: false });
    }
};

module.exports = authMiddleware;
