const jwt = require("jsonwebtoken");
require("../config/dbConnect");
const User = require("../models/User");
const Story = require("../models/Story");

const createStory = async (req, res) => {
  try {
    const newStory = new Story(req.body);
    console.log(req.body);
    const savedStory = await newStory.save();
    res.json({
      status: "success",
      data: savedStory,
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      status: "failure",
    });
  }
};

const getAllStories = (req, res) => {
  const stories = [
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Bhakthishri",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
  ];
  res.json(stories);
};

const getLatestStories = (req, res) => {
  const stories = [
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Bhakthishri",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
  ];
  res.json(stories);
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

const getStoryById = async (req, res) => {
  try {
    const storyId = req.params.id;
    const story = await Story.findOne({ _id: storyId }).populate("author");
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

// Export of all methods as object
module.exports = {
  getAllStories,
  authenticateUser,
  getLatestStories,
  getStoriesByCategory,
  getStoriesByUser,
  createStory,
  getStoryById,
};
