const { Router } = require("express");

const apiController = require("../controllers/apiController");

const router = Router();

router.get("/stories/all", apiController.getAllStories);
router.get("/stories/latest", apiController.getLatestStories);
router.post("/create", apiController.createStory);
router.post("/auth/google", apiController.authenticateUser);
// router.post("/stories/:id", apiController.getStoryById);

module.exports = router;
