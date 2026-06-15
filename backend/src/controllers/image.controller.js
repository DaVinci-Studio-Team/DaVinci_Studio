const {
  uploadImageService,
  getUserImagesService,
  getAllImages,
} = require("../services/image.service");
const imageModel = require("../models/image.model");

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

const deleteImageByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const { imageId } = req.params;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    const image = await imageModel.findById(imageId);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    if (image.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete this image",
      });
    }

    await imageModel.deleteOne({ _id: imageId });

    return res.status(200).json({
      success: true,
      message: "Image deleted successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting images",
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

const toggleVisibility = async (req, res) => {
  try {
    const { imageId } = req.params;
    const user = req.user.id;

    const image = await imageModel.findById(imageId);

    if (user !== image.user.toString()) {
      console.log(user, image.user);
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    image.isPrivate = image.isPrivate ? false : true;

    await image.save();

    return res.status(200).json({
      success: true,
      message: `Image is now ${image.isPrivate}`,
      image,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  uploadImage,
  getImageByUserId,
  getImageByCommunity,
  toggleVisibility,
  deleteImageByUserId
};
