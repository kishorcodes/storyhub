require("../config/dbConnect");
const User = require("../models/User");
const Story = require("../models/Story");
const Comment = require("../models/Comment");

const createStory = async (req, res) => {
  try {
    const newStory = new Story(req.body);
    const savedStory = await newStory.save();
    const author = await User.findOne({ _id: req.body.author });
    author.stories.push(savedStory._id);
    await author.save();
    res.status(201).json({
      status: "success",
      data: savedStory,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const getAllStories = (req, res) => {
  Story.find({})
    .populate("author")
    .then((stories) => {
      res.status(200).json({
        status: "success",
        data: stories,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

const getStoryById = async (req, res) => {
  try {
    const storyId = req.params.id;
    const story = await Story.findOne({ _id: storyId })
      .populate("author")
      .populate({
        path: "comments",
        populate: {
          path: "author",
          model: "User",
        },
      });

    res.status(200).json({
      status: "success",
      data: story,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getLatestStories = (req, res) => {
  Story.find({})
    .populate("author")
    .limit(6)
    .then((stories) => {
      res.status(200).json({
        status: "success",
        data: stories,
      });
    })
    .catch((err) => {
      res.status(403).json({
        status: "error",
        message: err.message,
      });
    });
};

const getStoriesByCategory = (req, res) => {
  const { category } = req.params;
  Story.find({ category })
    .populate("author")
    .then((stories) => {
      res.status(200).json({
        status: "success",
        data: stories,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

const getStoriesByUser = (req, res) => {
  const userId = req.params.id;
  User.findOne({ _id: userId })
    .populate({
      path: "stories",
      populate: {
        path: "author",
        model: "User",
      },
    })
    .then((user) => {
      res.status(200).json({
        status: "success",
        data: user.stories,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

const getBookmarks = (req, res) => {
  const { userId } = req.body;
  User.findOne({ _id: userId })
    .populate({
      path: "bookmarks",
      populate: {
        path: "author",
        model: "User",
      },
    })
    .then((user) => {
      res.status(200).json({
        status: "success",
        data: user.bookmarks,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

const addBookmark = (req, res) => {
  const { userId, storyId } = req.body;
  User.findOne({ _id: userId })
    .then((user) => {
      if (user.bookmarks.includes(storyId)) {
        return res.status(409).json({
          status: "failure",
          message: "Bookmark already exists",
        });
      }
      user.bookmarks.push(storyId);
      user.save();
      res.status(201).json({
        status: "success",
        message: "Bookmark saved successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

const authenticateUser = async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const picture = req.body.picture;
    const user = await User.findOneAndUpdate(
      { email: email },
      {
        $set: {
          email,
          name,
          picture,
        },
      },
      { upsert: true, new: true }
    );

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while adding the comment",
    });
  }
};

const addComment = async (req, res) => {
  try {
    const storyId = req.params.id;
    const { text, author, createdAt } = req.body;

    const comment = await Comment.create({
      text,
      author,
      story: storyId,
      createdAt,
    });

    const story = await Story.findByIdAndUpdate(
      storyId,
      { $push: { comments: comment } },
      { new: true }
    )
      .populate("author")
      .populate({
        path: "comments",
        populate: {
          path: "author",
          model: "User",
        },
      });

    res.status(201).json({
      status: "success",
      data: story,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while adding the comment",
    });
  }
};

const updateReactionCount = async (req, res) => {
  try {
    const storyId = req.params.id;
    const reactionType = req.body.reactionType;
    const story = await Story.findOne({ _id: storyId }).populate("author");

    if (!story) {
      return res.status(404).json({
        status: "error",
        message: "invalid story id",
      });
    }

    switch (reactionType) {
      case "heart":
        story.reactions.heart += 1;
        break;
      case "smile":
        story.reactions.smile += 1;
        break;
      case "flash":
        story.reactions.flash += 1;
        break;
      case "shock":
        story.reactions.shock += 1;
        break;
      case "sad":
        story.reactions.sad += 1;
        break;
      default:
        return console.log("Invalid reaction type");
    }

    const updatedStory = await story.save();
    res.status(201).json({
      status: "success",
      data: updatedStory,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllStories,
  authenticateUser,
  getLatestStories,
  getStoriesByCategory,
  getStoriesByUser,
  createStory,
  getStoryById,
  addComment,
  updateReactionCount,
  getBookmarks,
  addBookmark,
};
