const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to hash password before saving the user
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10); // Generate salt
            const hashedPassword = await bcrypt.hash(this.password, salt); // Hash password
            this.password = hashedPassword; // Save hashed password
            next();
        } catch (error) {
            next(error); // If error, pass it to next middleware
        }
    } else {
        return next();
    }
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password); // Compare the password
    } catch (error) {
        throw error;
    }
};

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
