// app.js - Main application file for the Express server
const express = require("express");
const cors = require("cors");
const promptRoutes = require("./routes/prompt.routes");

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

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to DaVinci Studio Backend API!");
});

// Routes will be added here in the future.
app.use("/api/prompt", promptRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
