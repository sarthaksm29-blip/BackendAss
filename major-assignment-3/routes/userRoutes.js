/*
  Routes: userRoutes.js
  User routes for retrieving user data
*/

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Get all users
router.get("/", userController.getAllUsers);

// Get user by ID
router.get("/:id", userController.getUserById);

module.exports = router;
