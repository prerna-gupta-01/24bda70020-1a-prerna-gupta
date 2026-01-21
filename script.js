// Initial balance (stored in localStorage)
let balance = Number(localStorage.getItem("userBalance")) || 1000;

// Elements
const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const message = document.getElementById("message");

// Display balance
function updateBalance() {
  balanceText.textContent = "₹" + balance;
  localStorage.setItem("userBalance", balance);
}

// Initial load
updateBalance();

// Validate amount
function isValid(amount) {
  return amount > 0 && !isNaN(amount);
}

// Deposit function
function deposit() {
  const amount = Number(amountInput.value);

  if (isValid(amount)) {
    balance += amount;
    updateBalance();
    showMessage("Amount deposited successfully", "success");
    amountInput.value = "";
  } else {
    showMessage("Invalid amount!", "error");
  }
}

// Withdraw function
function withdraw() {
  const amount = Number(amountInput.value);

  if (!isValid(amount)) {
    showMessage("Invalid amount!", "error");
  } else if (amount > balance) {
    showMessage("Insufficient balance!", "error");
  } else {
    balance -= amount;
    updateBalance();
    showMessage("Amount withdrawn successfully", "success");
    amountInput.value = "";
  }
}

// Show message
function showMessage(text, type) {
  message.textContent = text;
  message.className = "message " + type;
  message.style.display = "block";
}

// Hide message while typing
amountInput.addEventListener("input", () => {
  message.style.display = "none";
});
