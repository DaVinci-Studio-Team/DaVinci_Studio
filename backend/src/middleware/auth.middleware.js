const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config/jwt');

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            success: false,
            message: "No authorization",
        });
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid token",
            error: error.message,
        });
    }
};

module.exports = {
    authMiddleware,
};