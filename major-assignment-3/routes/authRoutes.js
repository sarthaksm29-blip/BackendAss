/*
  Routes: authRoutes.js
  Authentication routes for Signup and Login
*/

const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { validateSignup } = require("../middleware/validationMiddleware");

// Signup Route with validation middleware
router.post("/signup", validateSignup, authController.signup);

// Login Route
router.post("/login", authController.login);

module.exports = router;
