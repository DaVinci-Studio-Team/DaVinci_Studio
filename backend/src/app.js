// app.js - Main application file for the Express server
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const promptRoutes = require("./routes/prompt.routes");
const userRoutes = require("./routes/auth.routes");
const imageRoutes = require('./routes/image.routes');

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to DaVinci Studio Backend API!");
});

// Routes will be added here in the future.
app.use("/api/prompt", promptRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/image", imageRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
