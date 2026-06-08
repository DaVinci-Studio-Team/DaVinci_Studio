const imageModel = require("../models/image.model");

const uploadImageService = async (imageData) => {
  return await imageModel.create(imageData);
};

module.exports = {
  uploadImageService,
};