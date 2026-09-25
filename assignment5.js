/*
  Assignment 5
  ATM Withdrawal Simulation (While Loop & Break Statement)
*/

// function to simulate ATM withdrawal
function atmWithdrawal(balance, withdrawAmount) {
  console.log("Initial Balance: ₹" + balance);
  console.log("Withdrawal Amount per transaction: ₹" + withdrawAmount);
  console.log("-----------------------------------------");

  // repeatedly withdraw until balance is insufficient
  while (true) {
    if (balance < withdrawAmount) {
      console.log("Insufficient balance! Cannot withdraw ₹" + withdrawAmount);
      console.log("Final Remaining Balance: ₹" + balance);
      break; // break the loop when balance is not enough
    }

    // deduct withdrawal amount from balance
    balance = balance - withdrawAmount;
    console.log("Withdrawn: ₹" + withdrawAmount + " | Remaining Balance: ₹" + balance);
  }
}

// sample testing
atmWithdrawal(500, 150);
