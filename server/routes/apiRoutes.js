const { Router } = require("express");

const apiController = require("../controllers/apiController");

const router = Router();

router.get("/stories/all", apiController.getAllStories);
router.get("/stories/latest", apiController.getLatestStories);
router.post("/create", apiController.createStory);
router.post("/auth/google", apiController.authenticateUser);
router.get("/stories/:id", apiController.getStoryById);
router.post("/stories/:id/comments", apiController.addComment);
router.post("/stories/:id/reaction", apiController.updateReactionCount);

module.exports = router;
