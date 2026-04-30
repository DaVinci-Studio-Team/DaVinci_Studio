const { generateImageFromPromptByReplicate } = require("../services/replicate.service");
const { generateImageFromPromptByHuggingFace } = require("../services/huggingface.service.js");

const generateImageByReplicate = async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Received prompt:", prompt);

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const image = await generateImageFromPromptByReplicate(prompt);

    res.status(200).json({
      success: true,
      image,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const generateImageByHuggingFace = async (req, res) => {
  try {
    const { prompt, numImages } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const image = await generateImageFromPromptByHuggingFace(prompt);

    return res.status(200).json({
      success: true,
      image: [image],
    });
  } catch (error) {
    console.log("Controller Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Image generation failed",
    });
  }
};

module.exports = {
  generateImageByReplicate,
  generateImageByHuggingFace,
};
