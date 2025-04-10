//Creating the function for the word outputs
function generateList() {
    const maxCount = 140; 
    const defaultWord = "boo!"; 
    const divisibleBy3 = "EEK!"; 
    const divisibleBy5 = "WOW!"; 
    const outputContainer = document.getElementById('output'); 

  // Initialize the string for the list
    let output = ""; 

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
