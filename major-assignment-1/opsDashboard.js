/*
  Major Assignment 1 - RailConnect Live Ops Dashboard
  Train 12951 - Mumbai Rajdhani Express
  Rules:
  - Use Fat Arrow Functions
  - Do not use for or while loops
  - Use appropriate JavaScript array methods
  - Print the final dashboard using console.log()
*/

// import modular sample booking data
const sampleBookings = require("./bookingData");

// 1. getOccupancySummary
// Returns confirmed, waitlisted, RAC, total passengers and occupancy rate
const getOccupancySummary = (bookings) => {
  const confirmed = bookings.filter((b) => b.status === "Confirmed").length;
  const waitlisted = bookings.filter((b) => b.status === "Waitlisted" || b.status === "WL").length;
  const rac = bookings.filter((b) => b.status === "RAC").length;
  const totalPassengers = bookings.length;
  const occupancyRate = totalPassengers > 0 
    ? ((confirmed / totalPassengers) * 100).toFixed(2) + "%" 
    : "0.00%";

  return {
    confirmed,
    waitlisted,
    rac,
    totalPassengers,
    occupancyRate
  };
};

// 2. getRevenueBreakdown
// Returns total revenue and revenue breakdown by coach class and booking status
const getRevenueBreakdown = (bookings) => {
  const totalRevenue = bookings.reduce((sum, b) => sum + b.fare, 0);

  const byCoachClass = bookings.reduce((acc, b) => {
    acc[b.coachClass] = (acc[b.coachClass] || 0) + b.fare;
    return acc;
  }, {});

  const byStatus = bookings.reduce((acc, b) => {
    acc[b.status] = (acc[b.status] || 0) + b.fare;
    return acc;
  }, {});

  return {
    totalRevenue,
    byCoachClass,
    byStatus
  };
};

// 3. getStationLoad
// Returns the number of passengers boarding from each station
const getStationLoad = (bookings) => {
  return bookings.reduce((acc, b) => {
    acc[b.boardingStation] = (acc[b.boardingStation] || 0) + 1;
    return acc;
  }, {});
};

// 4. getVulnerablePassengers
// Returns confirmed passengers who are below 12 or 60+, with name, age, coach and seat
const getVulnerablePassengers = (bookings) => {
  return bookings
    .filter((b) => b.status === "Confirmed" && (b.age < 12 || b.age >= 60))
    .map((b) => ({
      name: b.passengerName,
      age: b.age,
      coach: b.coachClass,
      seat: b.seatNo
    }));
};

// 5. getWaitlistClearancePlan
// Returns WL passengers sorted by lowest PNR, with a clearanceRank
const getWaitlistClearancePlan = (bookings) => {
  return bookings
    .filter((b) => b.status === "Waitlisted" || b.status === "WL")
    .slice()
    .sort((a, b) => a.pnr - b.pnr)
    .map((b, index) => ({
      pnr: b.pnr,
      passengerName: b.passengerName,
      coachClass: b.coachClass,
      fare: b.fare,
      clearanceRank: index + 1
    }));
};

// 6. generateFullDashboard
// Returns all the above information in one combined dashboard object
const generateFullDashboard = (bookings) => {
  const dashboard = {
    train: "Train 12951 - Mumbai Rajdhani Express",
    generatedAt: new Date().toISOString(),
    occupancySummary: getOccupancySummary(bookings),
    revenueBreakdown: getRevenueBreakdown(bookings),
    stationLoad: getStationLoad(bookings),
    vulnerablePassengers: getVulnerablePassengers(bookings),
    waitlistClearancePlan: getWaitlistClearancePlan(bookings)
  };

  return dashboard;
};

// Execute and print the final dashboard
const finalDashboard = generateFullDashboard(sampleBookings);
console.log("==================================================");
console.log("   RAILCONNECT LIVE OPS DASHBOARD - TRAIN 12951   ");
console.log("==================================================");
console.log(JSON.stringify(finalDashboard, null, 2));

// Export functions for modular usage
module.exports = {
  getOccupancySummary,
  getRevenueBreakdown,
  getStationLoad,
  getVulnerablePassengers,
  getWaitlistClearancePlan,
  generateFullDashboard
};
