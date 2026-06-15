const express = require('express');
const { uploadImage, getImageByUserId, getImageByCommunity, toggleVisibility, deleteImageByUserId } = require('../controllers/image.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/upload', authMiddleware, uploadImage);
router.get('/me', authMiddleware, getImageByUserId);
router.get('/community', getImageByCommunity);
router.patch("/:imageId/visibility",authMiddleware, toggleVisibility);
router.delete("/:imageId",authMiddleware, deleteImageByUserId);

module.exports = router;