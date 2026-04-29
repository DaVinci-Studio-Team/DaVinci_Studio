const express = require("express");
const { generateImageByHuggingFace, generateImageByReplicate } = require("../controllers/prompt.controller");

const router = express.Router();

router.post("/huggingface/generate-image", generateImageByHuggingFace);
router.post("/replicate/generate-image", generateImageByReplicate);

module.exports = router;