// Function to check divisibility
function checkDivision(num, divisor) {
    return num % divisor === 0; // Returns true if divisible
}

// Function to generate the word output list
function generateList(countTo) {
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

    for (let i = 1; i <= countTo; i++) {
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

    // Update greeting message
    const newGreeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}, Welcome to Fizz Buzz 2!`;
    document.getElementById("greeting").textContent = newGreeting;

    // Prompt for countTo value after valid name input
    let countTo = prompt(`How high do you want to count, ${firstName}? (Max
