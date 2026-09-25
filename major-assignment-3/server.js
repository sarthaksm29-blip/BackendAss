/*
  Major Assignment 3 - User Registration & Authentication API
  Main Express Server: server.js
*/

const express = require("express");

// Import modular components
const loggerMiddleware = require("./middleware/loggerMiddleware");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in Express middleware to parse incoming JSON payloads
app.use(express.json());

// Custom Express middleware for request logging
app.use(loggerMiddleware);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to User Registration & Authentication API",
    endpoints: {
      signup: "POST /api/auth/signup",
      login: "POST /api/auth/login",
      getAllUsers: "GET /api/users",
      getUserById: "GET /api/users/:id"
    }
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log("==================================================");
  console.log(" Major Assignment 3 - Auth Server running on port " + PORT);
  console.log(" URL: http://localhost:" + PORT);
  console.log("==================================================");
});
