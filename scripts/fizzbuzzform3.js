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
        const divisor3 = parseInt(document.getElementById("divisor3").value) || 1;
        const word1 = document.getElementById("word1").value.trim();
        const divisor5 = parseInt(document.getElementById("divisor5").value) || 1;
        const word2 = document.getElementById("word2").value.trim();
        let divisor7 = parseInt(document.getElementById("divisor7").value) || 1;
        const word3 = document.getElementById("word3").value.trim();
        let totalCount = parseInt(document.getElementById("total-count").value);
        if (isNaN(divisor7) || divisor7 === 0) divisor7 = 1;
        if (isNaN(totalCount) || totalCount < 1) totalCount = 100;

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
        // Loop through and generate results
        for (let i = 1; i <= totalCount; i++) {
            let outputWords = [];
            let classList = [];
            if (i % divisor3 === 0) {
                outputWords.push(word1);
                classList.push("sneaky");
            }
            if (i % divisor5 === 0) {
                outputWords.push(word2);
                classList.push("viper");
            }
            if (i % divisor7 === 0) {
                outputWords.push(word3);
                classList.push("bang");
            }

            const paragraph = document.createElement("p");
            if (outputWords.length === 0) {
                paragraph.textContent = `${i}. None`;
                paragraph.classList.add("hi");
            } else {
                paragraph.textContent = `${i}. ${outputWords.join(" ")}`;
                classList.forEach(cls => {
                    if (cls && cls.trim() !== "") {
                        paragraph.classList.add(cls);
                    }
                });
            }
            resultsContainer.appendChild(paragraph);
        }
    });
});