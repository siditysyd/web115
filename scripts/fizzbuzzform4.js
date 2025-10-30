document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input for names
        const firstName = document.getElementById("first-name").value.trim();
        const middleInitial = document.getElementById("middle-initial").value.trim();
        const lastName = document.getElementById("last-name").value.trim();

        // Create full name
        let fullName = firstName;
        if (middleInitial) {
            fullName += ` ${middleInitial}.`;
        }
        fullName += ` ${lastName}`;

        // Update greeting
        document.getElementById("greeting").textContent = `Welcome to Sneaky Viper Studios, ${fullName}!`;

        // Get divisibility settings
        const divisor1 = parseInt(document.getElementById("divisor1").value);
        const word1 = document.getElementById("word1").value.trim();
        const divisor2 = parseInt(document.getElementById("divisor2").value);
        const word2 = document.getElementById("word2").value.trim();
        const divisor3 = parseInt(document.getElementById("divisor3").value);
        const word3 = document.getElementById("word3").value.trim();
        const totalCount = parseInt(document.getElementById("total-count").value);

        // Find or create results container
        let resultsContainer = document.getElementById("results-container");
        if (!resultsContainer) {
            resultsContainer = document.createElement("div");
            resultsContainer.id = "results-container";
            document.getElementById("greeting").parentElement.appendChild(resultsContainer);
        } else {
            resultsContainer.innerHTML = ""; // Clear old results
        }

        // Loop through and generate results
        for (let i = 1; i <= totalCount; i++) {
            let outputWords = [];
            let cssClass = "";

            if (i % divisor1 === 0) {
                outputWords.push(word1);
                cssClass = "sneaky";
            }
            if (i % divisor2 === 0) {
                outputWords.push(word2);
                cssClass = "viper";
            }
            if (i % divisor3 === 0) {
                outputWords.push(word3);
                cssClass = "bang";
            }

            if (outputWords.length === 0) {
                outputWords.push(""); // blank if no match
                cssClass = "hello";
            }

            const paragraph = document.createElement("p");
            paragraph.textContent = `${i}. ${outputWords.join(", ")}`;
            paragraph.classList.add(cssClass);
            resultsContainer.appendChild(paragraph);
        }
    });
});