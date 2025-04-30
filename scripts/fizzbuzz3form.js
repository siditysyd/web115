// Prompt user for countTo value
let countTo = prompt(`How high do you want to count? (Max: 140)`);
countTo = parseInt(countTo, 10);
if (isNaN(countTo) || countTo < 1 || countTo > 140) {
    alert("Please enter a valid number between 1 and 140.");
    countTo = 140; // Default to max if input is invalid
}

// Function to check divisibility
function checkDivision(num, divisor) {
    return num % divisor === 0; // Returns true if divisible
}

// Function to generate the word output list
function generateList(countTo) {
    const firstDivisor = 3;
    const secondDivisor = 5;
    const thirdDivisor = 7;
    const divisibleBy3 = "Kitty!";
    const divisibleBy5 = "Cat!";
    const divisibleBy7 = "Bang!";
    const outputContainer = document.getElementById('output');

    if (!outputContainer) {
        console.error("Output container with ID 'output' not found.");
        return;
    }

    let output = ""; // Initialize the output string

    for (let i = 1; i <= countTo; i++) {
        if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {
            output += `${i}. ${divisibleBy3} ${divisibleBy5} ${divisibleBy7}<br>`;
        } else if (checkDivision(i, firstDivisor)) {
            output += `${i}. ${divisibleBy3}<br>`;
        } else if (checkDivision(i, secondDivisor)) {
            output += `${i}. ${divisibleBy5}<br>`;
        } else if (checkDivision(i, thirdDivisor)) {
            output += `${i}. ${divisibleBy7}<br>`;
        } else {
            output += `${i}.<br>`;
        }
    }

    outputContainer.innerHTML = output; // Populate the output container
}

// Function to update greeting
function updateGreeting(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const firstName = document.getElementById('first_name').value.trim();
    const middleInitial = document.getElementById('middle_initial').value.trim();
    const lastName = document.getElementById('last_name').value.trim();

    // Validate inputs
    if (!firstName || !lastName) {
        alert("Please enter both your first name and last name.");
        return;
    }

    const newGreeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}, Welcome to Fizz Buzz 2!`;
    document.getElementById("greeting").textContent = newGreeting;

    // Call generateList after valid input
    generateList(countTo);
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("name_form");
    if (form) {
        form.addEventListener("submit", updateGreeting);
    } else {
        console.error("Form with ID 'name_form' not found.");
    }
});
