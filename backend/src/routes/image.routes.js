const express = require('express');
const { uploadImage, getImageByUserId, getImageByCommunity } = require('../controllers/image.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/upload', authMiddleware, uploadImage);
router.get('/me', authMiddleware, getImageByUserId);
router.get('/community', getImageByCommunity)

module.exports = router;