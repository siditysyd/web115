 // Update greeting and generate list
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

    const newGreeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}, Welcome to Fizz Buzz 1!`;
    document.getElementById("greeting").textContent = newGreeting;

    // Generate the list
    generateList();
}

// Generate list
function generateList() {
    const maxCount = 140;
    const divisibleBy3 = "Kitty!";
    const divisibleBy5 = "Cat!";
    const outputContainer = document.getElementById('output');

    // Ensure output container exists
    if (!outputContainer) {
        console.error("Output container with ID 'output' not found.");
        return;
    }

    let output = ""; // Initialize output string
    for (let i = 1; i <= maxCount; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += `${i}. ${divisibleBy3} ${divisibleBy5}<br>`;
        } else if (i % 3 === 0) {
            output += `${i}. ${divisibleBy3}<br>`;
        } else if (i % 5 === 0) {
            output += `${i}. ${divisibleBy5}<br>`;
        } else {
            output += `${i}.<br>`;
        }
    }

    outputContainer.innerHTML = output; // Populate output
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('name_form');
    if (form) {
        form.addEventListener('submit', updateGreeting);
    }
});
