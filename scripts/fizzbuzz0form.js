//Updating the greeting using the input values
        function updateGreeting() {
	    const firstName = document.getElementById('first_name').value;
            const middleInitial = document.getElementById('middle_initial').value;
            const lastName = document.getElementById('last_name').value;
            const newGreeting = `Hello, ${firstName} ${middleInitial}. ${lastName}!`;
 }
//Showing the new greeting on the webpage
  document.getElementById("newGreeting").textContent = '{newGreeting}!`;

// Input number request
        let countTo = prompt(`How high do you want to count, ${firstName}? (Max: 125)`);
        countTo = parseInt(countTo, 10);

// Confirm number is valid
        if (isNaN(countTo) || countTo <= 0) {
            alert("Please enter a number greater than 0.");
            return;
        } else if (countTo > 125) {
            alert("The highest number you can select is 125.");
            countTo = 125; 
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

//Creating the original loop displaying Black Cat
	let output = '';
            	if (i = 1; i <= 125; i++) {
                output += `${i}. black cat<br>`;
 }
//Creating the loop with the even and odd output
	let output = '';
		if (i % 2 === 0) {
                    output += `${i}. The number is even<br>`;
                } else {
                    output += `${i}. The number is odd<br>`;
}
        document.getElementById('output').innerHTML = output;
}
