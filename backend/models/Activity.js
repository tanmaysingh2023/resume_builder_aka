const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true }, // e.g., "Resume Created", "PDF Downloaded"
    timestamp: { type: Date, default: Date.now },
    metadata: { 
      type: Object, 
      validate: {
        validator: (value) => {
          // Example of simple metadata validation
          return typeof value === 'object' && value !== null;
        },
        message: 'Metadata must be a valid object',
      }
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create an index on `userId` for faster lookups
activitySchema.index({ userId: 1, timestamp: -1 });

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
