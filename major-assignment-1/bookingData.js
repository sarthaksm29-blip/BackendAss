/*
  Major Assignment 1 - RailConnect Live Ops Dashboard
  Dataset: Train 12951 - Mumbai Rajdhani Express
*/

// sample booking records
const bookings = [
  {
    pnr: 8214501234,
    passengerName: "Aarav Sharma",
    age: 8,
    gender: "M",
    coachClass: "2A",
    fare: 3150,
    status: "Confirmed",
    seatNo: "A1-14",
    boardingStation: "MMCT",
    destinationStation: "NDLS"
  },
  {
    pnr: 8214501235,
    passengerName: "Sunita Sharma",
    age: 38,
    gender: "F",
    coachClass: "2A",
    fare: 3150,
    status: "Confirmed",
    seatNo: "A1-15",
    boardingStation: "MMCT",
    destinationStation: "NDLS"
  },
  {
    pnr: 8432109871,
    passengerName: "Ramesh Patel",
    age: 67,
    gender: "M",
    coachClass: "1A",
    fare: 4850,
    status: "Confirmed",
    seatNo: "H1-04",
    boardingStation: "BVI",
    destinationStation: "NDLS"
  },
  {
    pnr: 8192304561,
    passengerName: "Pooja Mehta",
    age: 26,
    gender: "F",
    coachClass: "3A",
    fare: 2280,
    status: "Confirmed",
    seatNo: "B2-21",
    boardingStation: "ST",
    destinationStation: "NDLS"
  },
  {
    pnr: 8945612301,
    passengerName: "Kavita Rao",
    age: 71,
    gender: "F",
    coachClass: "3A",
    fare: 2280,
    status: "Confirmed",
    seatNo: "B2-22",
    boardingStation: "BRC",
    destinationStation: "NDLS"
  },
  {
    pnr: 8765432109,
    passengerName: "Rohan Verma",
    age: 29,
    gender: "M",
    coachClass: "3A",
    fare: 2280,
    status: "RAC",
    seatNo: "RAC-05",
    boardingStation: "MMCT",
    destinationStation: "NDLS"
  },
  {
    pnr: 8123456780,
    passengerName: "Vikram Malhotra",
    age: 45,
    gender: "M",
    coachClass: "2A",
    fare: 3150,
    status: "Waitlisted",
    seatNo: "WL-03",
    boardingStation: "MMCT",
    destinationStation: "NDLS"
  },
  {
    pnr: 8012345678,
    passengerName: "Sneha Kapoor",
    age: 24,
    gender: "F",
    coachClass: "3A",
    fare: 2280,
    status: "Waitlisted",
    seatNo: "WL-01",
    boardingStation: "ST",
    destinationStation: "NDLS"
  },
  {
    pnr: 8345678901,
    passengerName: "Ananya Iyer",
    age: 10,
    gender: "F",
    coachClass: "3A",
    fare: 2280,
    status: "Confirmed",
    seatNo: "B3-18",
    boardingStation: "BRC",
    destinationStation: "NDLS"
  },
  {
    pnr: 8098765432,
    passengerName: "Deepak Joshi",
    age: 62,
    gender: "M",
    coachClass: "1A",
    fare: 4850,
    status: "Waitlisted",
    seatNo: "WL-02",
    boardingStation: "BVI",
    destinationStation: "NDLS"
  }
];

module.exports = bookings;
