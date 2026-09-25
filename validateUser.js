/*
  Assignment 9 - Custom Validation Module (validateUser.js)
  Validates incoming user object
*/

function validateUser(user) {
  // check if user object is provided
  if (!user || typeof user !== "object") {
    return {
      isValid: false,
      message: "Request body must be a valid JSON object"
    };
  }

  // 1. name must be string
  if (typeof user.name !== "string" || user.name.trim() === "") {
    return {
      isValid: false,
      message: "Validation Error: 'name' must be a non-empty string"
    };
  }

  // 2. age must be number > 18
  if (typeof user.age !== "number" || user.age <= 18) {
    return {
      isValid: false,
      message: "Validation Error: 'age' must be a number greater than 18"
    };
  }

  // 3. email must include "@"
  if (typeof user.email !== "string" || !user.email.includes("@")) {
    return {
      isValid: false,
      message: "Validation Error: 'email' must contain '@'"
    };
  }

  // if all checks pass
  return {
    isValid: true,
    message: "User validation successful"
  };
}

module.exports = validateUser;
