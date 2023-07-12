const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email field is required",
  },
  name: {
    type: String,
    required: "Name field is required",
  },
  picture: {
    type: String,
    required: "Name field is required",
  },
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
