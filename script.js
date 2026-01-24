let balance = Number(localStorage.getItem("userBalance")) || 1000;

const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const message = document.getElementById("message");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

function updateBalance() {
  balanceText.textContent = "₹" + balance;
  localStorage.setItem("userBalance", balance);
}

function isValidAmount(amount) {
  return amount > 0 && !isNaN(amount);
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = "message " + type;
  message.style.display = "block";
}

depositBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);

  if (isValidAmount(amount)) {
    balance += amount;
    updateBalance();
    showMessage("Amount deposited successfully", "success");
    amountInput.value = "";
  } else {
    showMessage("Invalid amount", "error");
  }
});

withdrawBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);

  if (!isValidAmount(amount)) {
    showMessage("Invalid amount", "error");
  } else if (amount > balance) {
    showMessage("Insufficient balance", "error");
  } else {
    balance -= amount;
    updateBalance();
    showMessage("Amount withdrawn successfully", "success");
    amountInput.value = "";
  }
});

amountInput.addEventListener("input", () => {
  message.style.display = "none";
});

updateBalance();
