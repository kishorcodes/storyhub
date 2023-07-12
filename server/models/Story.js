const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: "This field is required",
  },
  subtitle: {
    type: String,
    required: "This field is required",
  },
  content: {
    type: String,
    required: "This field is required",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: "This field is required",
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: "This field is required",
  },
  reactions: {
    heart: {
      type: Number,
      default: 0,
    },
    smile: {
      type: Number,
      default: 0,
    },
    flash: {
      type: Number,
      default: 0,
    },
    shock: {
      type: Number,
      default: 0,
    },
    sad: {
      type: Number,
      default: 0,
    },
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Story", storySchema);
