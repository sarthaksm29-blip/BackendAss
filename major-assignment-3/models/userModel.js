/*
  Model: userModel.js
  Handles read and write operations on data/users.json
*/

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/users.json");

// Helper function to read users from JSON file
const readUsersFromFile = () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([]));
      return [];
    }
    const fileData = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(fileData || "[]");
  } catch (error) {
    console.error("Error reading users file:", error);
    return [];
  }
};

// Helper function to write users to JSON file
const writeUsersToFile = (users) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error writing to users file:", error);
  }
};

// Model methods
const userModel = {
  // Get all users
  findAll: () => {
    return readUsersFromFile();
  },

  // Find user by ID
  findById: (id) => {
    const users = readUsersFromFile();
    return users.find((user) => String(user.id) === String(id));
  },

  // Find user by Email
  findByEmail: (email) => {
    const users = readUsersFromFile();
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
  },

  // Create new user
  create: (name, email, password) => {
    const users = readUsersFromFile();
    const newUser = {
      id: Date.now().toString(),
      name: name || "Student User",
      email: email.toLowerCase(),
      password: password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeUsersToFile(users);
    return newUser;
  }
};

module.exports = userModel;
