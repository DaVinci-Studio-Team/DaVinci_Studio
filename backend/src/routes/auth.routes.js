const express = require("express");
const { registerUser, getUser } = require('../controllers/auth.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.get("/me", authMiddleware, getUser)

module.exports = router;