    // Updating the greeting using the input values
function updateGreeting() {
    const firstName = document.getElementById('first_name').value;
    const middleInitial = document.getElementById('middle_initial').value;
    const lastName = document.getElementById('last_name').value;
    const newGreeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}, Welcome to Fizz Buzz 1!`;

    // Showing the new greeting on the webpage
    document.getElementById("greeting").textContent = newGreeting;

    // Check if a results container exists, else create one or clear old content
    let resultsContainer = document.getElementById("results-container");
    if (!resultsContainer) {
        resultsContainer = document.createElement("div");
        resultsContainer.id = "results-container";
        document.getElementById("greeting").parentElement.appendChild(resultsContainer);
    } else {
        resultsContainer.innerHTML = "";
    }
}

// Function for generating the word output list
function generateList() {
    const maxCount = 140; 
    const defaultWord = ""; 
    const divisibleBy3 = "Kitty!"; 
    const divisibleBy5 = "Cat!"; 
    const outputContainer = document.getElementById('output');


    // Initialize the string for the list
    let output = ""; 

    // Generate the output
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
    // Update the output container
    outputContainer.innerHTML = output; 
}

//Gernate the list only after the form_name has been submitted
	generateList();
    // Create a paragraph element
            const paragraph = document.createElement("p");
            paragraph.textContent = output;
			paragraph.classList.add(cssClass);
            resultsContainer.appendChild(paragraph);

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
	
 // Prevent form submission & handle everything inside the event listener
    const form = document.getElementById("form_name");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents the form from refreshing the page
            updateGreeting(); // Updates the greeting and generates the list
        });
    } else {
        console.error("Form with ID 'form_name' not found.");
    }
});
