const imageModel = require("../models/image.model");

const uploadImageService = async (imageData) => {
  const { imageUrl, prompt, user, style, modelUsed } = imageData;
  const image = new imageModel(
    { imageUrl, prompt, user, style, modelUsed });
  return await image.save();
};

module.exports = {
  uploadImageService,
};