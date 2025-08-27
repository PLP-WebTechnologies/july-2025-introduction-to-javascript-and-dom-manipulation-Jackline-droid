// =======================
// Part 1: JavaScript Basics
// =======================

// Variable + Conditional
let userName = ""; 

function sayHello() {
  userName = document.getElementById("nameInput").value;

  if (userName) {
    document.getElementById("greeting").textContent = "Hello, " + userName + "!";
  } else {
    document.getElementById("greeting").textContent = "Please enter a name!";
  }
}

// =======================
// Part 2: Functions
// =======================

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Show result of addition in DOM
function showSum(a, b) {
  const result = addNumbers(a, b);
  document.getElementById("sumResult").textContent = `The sum of ${a} + ${b} = ${result}`;
}

// =======================
// Part 3: Loops
// =======================

// Example 1: Generate list items with a for loop
function generateList() {
  const list = document.getElementById("loopList");
  list.innerHTML = ""; // clear old items

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
  }
}

// Example 2: While loop (console countdown)
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// =======================
// Part 4: DOM Manipulation
// =======================

// DOM Interaction 1: Change background color on click
document.getElementById("colorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightskyblue" ? "white" : "lightskyblue";
});

// DOM Interaction 2: Toggle visibility of text
document.getElementById("toggleBtn").addEventListener("click", function () {
  const text = document.getElementById("toggleText");
  text.style.display = (text.style.display === "none") ? "block" : "none";
});

// DOM Interaction 3: Update footer year dynamically
document.querySelector("footer p").textContent = 
  "© " + new Date().getFullYear() + " My JavaScript Assignment";
