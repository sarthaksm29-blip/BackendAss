/*
  Assignment 10
  RTO Student Vehicle Registration System
*/

const fs = require("fs");
const path = require("path");

// file path for storing registration records
const FILE_PATH = path.join(__dirname, "rto_data.json");

// function to register a student vehicle
function registerVehicle(studentName, collegeId, vehicleNumber, vehicleType) {
  // get current date as registration date (YYYY-MM-DD)
  let registrationDate = new Date().toISOString().split("T")[0];

  // create student vehicle entry
  let newEntry = {
    studentName: studentName,
    collegeId: collegeId,
    vehicleNumber: vehicleNumber,
    vehicleType: vehicleType,
    registrationDate: registrationDate
  };

  let vehicleList = [];

  // if file already exists, read existing data
  if (fs.existsSync(FILE_PATH)) {
    let fileContent = fs.readFileSync(FILE_PATH, "utf-8");
    try {
      vehicleList = JSON.parse(fileContent);
    } catch (e) {
      vehicleList = [];
    }
  }

  // append new vehicle record
  vehicleList.push(newEntry);

  // write updated list to rto_data.json
  fs.writeFileSync(FILE_PATH, JSON.stringify(vehicleList, null, 2));

  console.log("Registered: " + studentName + " | " + vehicleType + " (" + vehicleNumber + ")");
}

// Sample registrations (via code input)
registerVehicle("Rahul Sharma", "COL-101", "MH-01-AB-1234", "Bike");
registerVehicle("Priya Patel", "COL-102", "MH-02-CD-5678", "Scooter");
registerVehicle("Amit Verma", "COL-103", "MH-04-EF-9012", "Car");
