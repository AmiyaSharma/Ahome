// Quiz data
const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
    },
    {
        question: "What is 5 * 5?",
        options: ["20", "25", "30", "6"],
        correctAnswer: "25",
    },
    {
        question: "What is 2 / 2?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect. The correct answer is " + currentQuestion.correctAnswer;
    }
    scoreElement.textContent = score;
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    feedbackElement.textContent = "";
    nextButton.disabled = true;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Quiz is over, display final score
        questionElement.textContent = "Quiz Finished!";
        optionsElement.innerHTML = "";
        
    }
}

// Event listeners
nextButton.addEventListener("click", nextQuestion);

// Start the quiz
displayQuestion();
