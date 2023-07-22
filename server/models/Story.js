const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: "title field is required",
  },
  subtitle: {
    type: String,
    required: "subtitle field is required",
  },
  content: {
    type: String,
    required: "content field is required",
  },
  thumbnail: {
    type: String,
    required: "thumbanil field is required",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: "author field is required",
  },
  publishedAt: {
    type: Date,
    default: Date.now,
    required: "date field is required",
  },
  category: {
    type: String,
    required: "category field is required",
  },
  reactions: {
    heart: {
      type: Number,
      default: 0,
      required: "heart field is required",
    },
    smile: {
      type: Number,
      default: 0,
      required: "smile field is required",
    },
    flash: {
      type: Number,
      default: 0,
      required: "flash field is required",
    },
    shock: {
      type: Number,
      default: 0,
      required: "shock field is required",
    },
    sad: {
      type: Number,
      default: 0,
      required: "sad field is required",
    },
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: "comment field is required",
    },
  ],
});

module.exports = mongoose.model("Story", storySchema);
