/*
  Assignment 8
  College Grading System
*/

// function to calculate grade based on student score
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// sample testing
console.log("Score 95: Grade " + getGrade(95));
console.log("Score 85: Grade " + getGrade(85));
console.log("Score 72: Grade " + getGrade(72));
console.log("Score 65: Grade " + getGrade(65));
console.log("Score 50: Grade " + getGrade(50));
