const { registerUserService } = require("../services/auth.service");
const { generateToken } = require("../utils/generateToken");

const registerUser = async (req, res) => {
    try {
        console.log(req.body)
        const user = await registerUserService(req.body);

        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        })

    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message,
        });
    }
};

module.exports = {
    registerUser,
};