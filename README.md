# Banking Management System

## About the Project
This project is a simple **Banking Management System** developed using **HTML, CSS, and JavaScript**.  
It allows a user to deposit and withdraw money and shows the current account balance.

The balance is stored using **browser local storage**, so it is not lost when the page is refreshed.

This project was developed and tested locally using **Visual Studio Code**.

## Tech Stack
- HTML5  
- CSS3  
- JavaScript  
- Browser Local Storage  

## Folder Structure
Banking-Management-System/
├── index.html
├── styles.css
├── script.js
└── README.md

---

## How the Project Works
- The current balance is displayed on the screen.
- The user enters an amount in the input field.
- Clicking **Deposit** adds the amount to the balance.
- Clicking **Withdraw** subtracts the amount if sufficient balance is available.
- Error messages are shown for invalid inputs.
- The balance is saved in local storage.

---

## Implementation Details

### HTML
HTML is used to create the structure of the application such as headings, input fields, buttons, and display sections.

```html
<div class="balance-box">
  Current Balance
  <span id="balance">₹0</span>
</div>

## CSS
CSS is used to style the interface and provide a clean layout with proper alignment, colors, and spacing.

.app-box {
  background: #ffffff;
  width: 380px;
  padding: 30px;
  border-radius: 12px;
}

## JavaScript
JavaScript is used to handle logical operations such as balance updates, validation, and local storage.

let balance = Number(localStorage.getItem("userBalance")) || 1000;

## Data Storage

The application uses localStorage to store the balance value.
This ensures that the balance remains the same even after refreshing or reopening the browser.

## How to Run the Project (VS Code)

Open Visual Studio Code.

Open the project folder.

Open the index.html file.

Run it in a browser (Live Server or directly).

Perform deposit and withdrawal operations.

## Screenshots

Home Screen showing balance, input field, and transaction buttons.

## Output

Updated balance after each transaction

Success message for valid operations

Error message for invalid input or insufficient balance
