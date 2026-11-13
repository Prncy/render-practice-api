const express = require("express");

const app = express();

app.use(express.json());

// Homepage
app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "My first Render deployment!",
    bread: "laka",
  });
});

app.get("/api/config", (req, res) => {
  res.json({
    application: process.env.APP_NAME || "Unknown Application",
    environment: process.env.NODE_ENV || "development"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

// API message
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from my Express API!",
    platform: "Render Practice",
  });
});

// Render provides its own port
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
