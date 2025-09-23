// Wait for the page to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Prevent form submission & handle everything inside the event listener
    document.getElementById("name-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        // Get user input values
        const firstName = document.getElementById("first-name").value;
        const middleInitial = document.getElementById("middle-initial").value;
        const lastName = document.getElementById("last-name").value;

        // Create the full name string
        let fullName = firstName;
        if (middleInitial) {
            fullName += ` ${middleInitial}.`;
        }
        fullName += ` ${lastName}`;

        // Display greeting message on the page
        document.getElementById("greeting").textContent = `Welcome to Sneaky Viper Studios, ${fullName}!`;

        // Ask user for a number
        let countTo = prompt(`How high do you want to count, ${firstName}? (Max: 125)`);
        countTo = parseInt(countTo, 10);

        // Validate input: Ensure it's a number and within the limit
        if (isNaN(countTo) || countTo <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        } else if (countTo > 125) {
            alert("The maximum count is 125. Setting to 125.");
            countTo = 125; // Restrict to the maximum allowed number
        }

        // Check if a results container already exists, if not, create one
        let resultsContainer = document.getElementById("results-container");
        if (!resultsContainer) {
            resultsContainer = document.createElement("div");
            resultsContainer.id = "results-container";
            document.getElementById("greeting").parentElement.appendChild(resultsContainer);
        } else {
            resultsContainer.innerHTML = ""; // Clear old results before adding new ones
        }

        // Loop from 1 to the chosen number and create paragraph elements
        for (let i = 1; i <= countTo; i++) {
            const isEven = (i % 2 === 0) ? "even" : "odd";
            const paragraph = document.createElement("p");
            paragraph.textContent = `${i}. Unique Voice - The number is ${isEven}`;
            resultsContainer.appendChild(paragraph);
        }
    });
});
