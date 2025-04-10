 // Updating the greeting using the input values
            function updateGreeting() {
                const firstName = document.getElementById('first_name').value;
                const middleInitial = document.getElementById('middle_initial').value;
                const lastName = document.getElementById('last_name').value;
                const newGreeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}, welcome to Fizz Buzz!`;
                
// Showing the new greeting on the webpage
                document.getElementById("greeting").textContent = newGreeting;
                
//Creating the function for the word outputs
function generateList() {
    const maxCount = 140; 
    const defaultWord = "Rawrr"; 
    const divisibleBy3 = "Kitty!"; 
    const divisibleBy5 = "Cat!"; 
    const outputContainer = document.getElementById('output'); 

  // Initialize the string for the list
    let output = ""; 

    //Output results
    for (let i = 1; i <= maxCount; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += `${i}. ${divisibleBy3} ${divisibleBy5}<br>`; 
        } else if (i % 3 === 0) {
            output += `${i}. ${divisibleBy3}<br>`;
        } else if (i % 5 === 0) {
            output += `${i}. ${divisibleBy5}<br>`; 
        } else {
            output += `${i}. ${defaultWord}<br>`; 
        }
    }

    outputContainer.innerHTML = output; 
}

// Run the function after the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateList();
});
