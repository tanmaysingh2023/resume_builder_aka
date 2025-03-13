// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        req.authenticated = false; // Add this for consistency
        return res.json({ authenticated: false });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            req.authenticated = false;
            return res.json({ authenticated: false });
        }

        req.user = decoded;         // Pass decoded user info
        req.authenticated = true;   // Add this for response clarity
        next();                     // Continue to the intended route
    });
};

module.exports = authMiddleware;
