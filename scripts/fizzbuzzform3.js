document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input values
        const firstName = document.getElementById("first-name").value.trim();
        const middleInitial = document.getElementById("middle-initial").value.trim();
        const lastName = document.getElementById("last-name").value.trim();

        // Create the full name string
        let fullName = firstName;
        if (middleInitial) {
            fullName += ` ${middleInitial}.`;
        }
        fullName += ` ${lastName}`;

        // Display greeting message on the page
        document.getElementById("greeting").textContent = `Welcome to Sneaky Viper Studios, ${fullName}!`;
        
        // Check if a results container exists, else create one
        let resultsContainer = document.getElementById("results-container");
        if (!resultsContainer) {
            resultsContainer = document.createElement("div");
            resultsContainer.id = "results-container";
            document.getElementById("greeting").parentElement.appendChild(resultsContainer);
        } else {
            resultsContainer.innerHTML = ""; // Clear old results before adding new ones
        }

        // Function to check divisibility
        function checkDivision(num, divisor) {
            return num % divisor === 0;
        }

        // Define divisors
        const firstDivisor = 3;
        const secondDivisor = 5;
		const thirdDivisor = 7;

        // Loop from 1 to 140 and create paragraph elements
        for (let i = 1; i <= 140; i++) {
            let output = `${i}. `;
            let words = [];
            let cssClass = "hi"; // Default class

            if (checkDivision(i, firstDivisor)) {
                words.push("Sneaky");
                cssClass = "sneaky";
            }
            if (checkDivision(i, secondDivisor)) {
                words.push("Viper");
                cssClass = "viper";
            }
            if (checkDivision(i, thirdDivisor)) {
                words.push("BANG!");
                cssClass = "bang";
            }

            if (words.length === 0) {
                words.push(" "); // Default if no match
            }

            // Create a paragraph element
            const paragraph = document.createElement("p");
            paragraph.textContent = output + words.join(", ");
            paragraph.classList.add(cssClass);
            resultsContainer.appendChild(paragraph);
        }
    });
});