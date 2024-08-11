const form = document.getElementById("interest-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const dropdowns = document.querySelectorAll(".dropdown");

let domainMap = {
    'A': 'Software Development',
    'B': 'Data Science',
    'C': 'Cybersecurity',
    'D': 'Artificial Intelligence',
    'E': 'Web Development'
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const answers = [];
    dropdowns.forEach(dropdown => {
        answers.push(dropdown.value);
    });

    let answerMap = {};
    let maxAnswer = "";
    answers.forEach(answer => {
        answerMap[answer] == null ? answerMap[answer] = 1 : answerMap[answer] += 1;

        if (answerMap[maxAnswer] == null || answerMap[answer] > answerMap[maxAnswer]) {
            maxAnswer = answer;
        }
    });
    const domain = domainMap[maxAnswer];

    // Can be used for mailing list
    const name = nameInput.value;
    const email = emailInput.value;
    
    // Display response
    const response = `We think you'd be interested in <mark>${domain}</mark>!`;
    let responseElement = document.querySelector(".response");
    
    if (!responseElement) {
        responseElement = document.createElement("p");
        responseElement.classList.add("response");
        document.body.prepend(responseElement);
    }
    responseElement.innerHTML = response;
});