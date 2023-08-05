const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "email field is required",
  },
  name: {
    type: String,
    required: "name field is required",
  },
  picture: {
    type: String,
    required: "picture field is required",
  },
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
      required: "story field is required",
    },
  ],
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
      required: "bookmarks field is required",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
