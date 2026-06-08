const { generateImageFromPromptByHuggingFace } = require("../services/huggingface.service.js");
const { uploadImageService } = require("../services/image.service");

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

    let savedImages;
    
    if (req.user) {
      savedImages = await Promise.all(
        images.map(async (imageUrl) => {
          return await uploadImageService({
            imageUrl,
            prompt,
            style,
            modelUsed: "HuggingFace Stable Diffusion 3 Medium",
            user: req.user.id,
          });
        }),
      );
    } else {
      savedImages = images.map((imageUrl) => ({
        imageUrl,
        prompt,
        style,
        modelUsed: "HuggingFace Stable Diffusion 3 Medium",
        isGuest: true,
      }));
    }

    return res.status(200).json({
      success: true,
      images: savedImages,
    });
  } catch (error) {
    console.log("Controller Error:", error.message);
    console.log("Full Error:", error);
    return res.status(500).json({
      success: false,
      message: "Image generation failed",
    });
  }
};

module.exports = {
  generateImageByHuggingFace,
};
