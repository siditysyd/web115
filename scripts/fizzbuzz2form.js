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

    const newGreeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}, Welcome to Fizz Buzz 2!`;
    document.getElementById("greeting").textContent = newGreeting;

        //Check if number id divisible by defined variables
              function checkDivision(num, divisor) {
              return num % divisor === 0; // Returns true if divisible, returns false if not
}
       //Check the divisibility using modulus 
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

    let output = ""; // Initialize output string

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

    outputContainer.innerHTML = output; // Populate output container
}
