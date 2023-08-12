
{/* Get the form element */}
const form = document.getElementById("quizzForm");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's answers
    const name = document.getElementById("name").value;
    const answer1 = document.getElementById("question1").value;
    const answer2 = document.querySelector("input[name='question2']:checked");

    // Check the correctness of the answers
    let correctness = 0;

    if (answer1 === "true") {
        correctness++;
    }

    if (answer2 && answer2.value === "true") {
        correctness++;
    }

    // Display the correctness result
    const result = document.getElementById("result");
    result.textContent = `Hello ${name}! You answered ${correctness} question(s) correctly.`;
});