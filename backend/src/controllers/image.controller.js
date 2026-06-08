const {
  uploadImageService,
  getUserImagesService,
  getAllImages,
} = require("../services/image.service");

const uploadImage = async (req, res) => {
  try {
    const { image, prompt, style, modelUsed } = req.body;

    const user = req.user.id;

    const imageData = {
      imageUrl: image,
      prompt,
      user,
      style,
      modelUsed,
    };

    const savedImage = await uploadImageService(imageData);

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      imageData: {
        id: savedImage._id,
        imageUrl: savedImage.imageUrl,
        prompt: savedImage.prompt,
        style: savedImage.style,
        modelUsed: savedImage.modelUsed,
        createdAt: savedImage.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      error: error.message,
    });
  }
};

const getImageByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const images = await getUserImagesService(userId);

    res.status(200).json({
      success: true,
      images: images,
      message: "Fetched images successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching images",
      error: error.message,
    });
  }
};

const getImageByCommunity = async (req, res) => {
  try {
    const images = await getAllImages();

    res.status(200).json({
      success: true,
      images: images,
      message: "Fetched images successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching images",
      error: error.message,
    });
  }
};


module.exports = {
  uploadImage,
  getImageByUserId,
  getImageByCommunity
};
