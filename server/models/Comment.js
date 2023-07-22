const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "text field is required",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: "author field is required",
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Story",
    required: "story field is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: "createdAt field is required",
  },
});
module.exports = mongoose.model("Comment", commentSchema);
