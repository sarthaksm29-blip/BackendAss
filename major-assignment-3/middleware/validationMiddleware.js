/*
  Middleware: validationMiddleware.js
  Validates signup request body:
  - Valid email format
  - Password min 8 chars
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 digit
  - At least 1 special character
  - Prevent registration with already registered email
*/

const userModel = require("../models/userModel");

const validateSignup = (req, res, next) => {
  const { email, password } = req.body;

  // 1. Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  // 2. Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // 3. Prevent registration with already registered email
  const existingUser = userModel.findByEmail(email);
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email is already registered"
    });
  }

  // 4. Validate password length (minimum 8 characters)
  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters long"
    });
  }

  // 5. At least 1 uppercase letter
  if (!/[A-Z]/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 uppercase letter"
    });
  }

  // 6. At least 1 lowercase letter
  if (!/[a-z]/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 lowercase letter"
    });
  }

  // 7. At least 1 digit
  if (!/[0-9]/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 digit"
    });
  }

  // 8. At least 1 special character
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!specialCharRegex.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 special character"
    });
  }

  // All validation checks passed
  next();
};

module.exports = {
  validateSignup
};
