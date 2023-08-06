const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: [true, "Must enter a quote"],
    trim: true,
  },
  mediaType: {
    type: String,
    enum: {
      values: ["movie", "TV show", "book", "video game", "other"],
      message: "{VALUE} is not supported",
    },
  },
  source: {
    type: String,
    required: [true, "Must enter a quote source"],
  },
  addedByUsername: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Task", quoteSchema);
