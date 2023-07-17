require("../config/dbConnect");
const User = require("../models/User");
const Story = require("../models/Story");
const Comment = require("../models/Comment");

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

    res.status(200).json({
      status: "succcess",
      data: story,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while adding the comment" });
  }
};

const createStory = async (req, res) => {
  try {
    const newStory = new Story(req.body);
    const savedStory = await newStory.save();
    res.json({
      status: "success",
      data: savedStory,
    });
  } catch (err) {
    res.status(403).json({
      status: "error",
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
    .catch((err) => console.log(err));
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
    .catch((err) => console.log(err));
};

const getStoriesByCategory = (req, res) => {
  const stories = [
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Avinash",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
  ];
  res.json(stories);
};

const getStoriesByUser = (req, res) => {
  const stories = [
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Avinash",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
  ];
  res.json(stories);
};

const updateReactionCount = async (req, res) => {
  try {
    const storyId = req.params.id;
    const reactionType = req.body.reactionType;
    const story = await Story.findOne({ _id: storyId }).populate("author");

    if (!story) {
      return console.log("Story not found");
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
    res.json({
      status: "success",
      data: updatedStory,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
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

    res.json({
      status: "success",
      data: story,
    });
  } catch (err) {
    res.json({ status: "error" });
  }
};

const authenticateUser = async (req, res) => {
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
};
