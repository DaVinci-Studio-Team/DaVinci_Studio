const imageModel = require("../models/image.model");

const uploadImageService = async (imageData) => {
  const { imageUrl, prompt, user, style, modelUsed } = imageData;
  const image = new imageModel({ imageUrl, prompt, user, style, modelUsed });
  return await image.save();
};

const getUserImagesService = async (userId) => {
  const images = await imageModel.find({ user: userId });
  return images;
};

const getAllImages = async () => {
  const images = await imageModel.find();

  return images;
};

module.exports = {
  uploadImageService,
  getUserImagesService,
  getAllImages
};
