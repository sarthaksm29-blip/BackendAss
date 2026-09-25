/*
  Assignment 7
  Print Day using Switch and Date Function
*/

// function to print day of the week
function printDayOfWeek() {
  // get current date
  let today = new Date();

  // get day number (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
  let dayIndex = today.getDay();
  let dayName = "";

  // switch case to find day name
  switch (dayIndex) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
  }

  console.log("Today is: " + dayName);
}

// sample testing
printDayOfWeek();
