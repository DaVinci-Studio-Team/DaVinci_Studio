const express = require("express");
const { generateImageByHuggingFace } = require("../controllers/prompt.controller");
const { optionalAuthMiddleware } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/huggingface/generate-image", optionalAuthMiddleware, generateImageByHuggingFace);

module.exports = router;