const {
  generateImageFromPromptByReplicate,
} = require("../services/replicate.service");
const {
  generateImageFromPromptByHuggingFace,
} = require("../services/huggingface.service.js");
const { uploadImageService } = require("../services/image.service");

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
    const { prompt, style, numImages = 1 } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const images = await generateImageFromPromptByHuggingFace(
      prompt,
      numImages,
    );

    const savedImages = await Promise.all(
      images.map(async (imageUrl) => {
        return await uploadImageService({
          imageUrl,
          prompt,
          style,
          modelUsed: "HuggingFace Stable Diffusion 3 Medium",
          user: req.user?._id,
        });
      }),
    );

    return res.status(200).json({
      success: true,
      images: savedImages,
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
