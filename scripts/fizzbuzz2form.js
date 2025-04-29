      // Updating the greeting using the input values
            function updateGreeting() {
                const firstName = document.getElementById('first_name').value;
                const middleInitial = document.getElementById('middle_initial').value;
                const lastName = document.getElementById('last_name').value;
                const newGreeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}, welcome to Fizz Buzz!`;
                
         // Showing the new greeting on the webpage
                document.getElementById("greeting").textContent = newGreeting;

        //Check if number id divisible by defined variables
              function checkDivision(num, divisor) {
              return num % divisor === 0; // Returns true if divisible, otherwise false
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
