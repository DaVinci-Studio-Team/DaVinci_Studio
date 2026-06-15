const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'User',
        required: false,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    style: {
        type: [String],
        default: [],
    },
    modelUsed: {
        type: String,
        required: true,
    },
    isPrivate: {
        type: Boolean,
        default: true
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image