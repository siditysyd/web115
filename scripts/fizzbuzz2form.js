  // Input number request
let countTo = prompt(`How high do you want to count, ${firstName}? (Max: 125)`);
countTo = parseInt(countTo, 10);

// Function to check divisibility
function checkDivision(countTo, divisor) {
    return countTo % divisor === 0; // Returns true if divisible, false otherwise
}

// Function to generate the word output list
function generateList() {
    const maxCount = 140;  
    const firstDivisor = 3;  
    const secondDivisor = 5;  
    const divisibleBy3 = "Kitty!";  
    const divisibleBy5 = "Cat!";  
    const outputContainer = document.getElementById('output');

    if (!outputContainer) {
        console.error("Output container with ID 'output' not found.");
        return;
    }

    let output = ""; // Initialize the output string

    for (let i = 1; i <= maxCount; i++) {
        if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
            output += `${i}. ${divisibleBy3} ${divisibleBy5}<br>`; 
        } else if (checkDivision(i, firstDivisor)) {
            output += `${i}. ${divisibleBy3}<br>`;
        } else if (checkDivision(i, secondDivisor)) {
            output += `${i}. ${divisibleBy5}<br>`; 
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
    generateList();
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
