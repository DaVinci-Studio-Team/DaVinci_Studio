const { uploadImageService } = require('../services/image.service');

const uploadImage = async (req, res) => {
    try {
        const { image, prompt, style, modelUsed } = req.body;

        const user = req.user._id;

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
            message: 'Image uploaded successfully',
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
            message: 'Error uploading image',
            error: error.message,
        });
    }
};

module.exports = {
    uploadImage,
};