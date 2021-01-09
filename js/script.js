//Set variables
var score = 0
var indexQ = 0
var currentQ = questions[indexQ];
var welcomeHeading = document.querySelector("#heading");
var startBtn = document.querySelector("#start-btn");
var questionTitle = document.querySelector("#question-title");

//Welcome message
function welcomeMessage() {
    welcomeHeading.textContent = "Coding Quiz Challenge";
    questionTitle.textContent = "It's time to test your knowledge of JavaScript! You will have 60 seconds to answer 6 questions. Click the start button to begin.";
};
welcomeMessage();
//Test questions Array
var questions = [
    {
        question: "",
        answers: ["", "", ""],
        correct: ""
    },
    {
        question: "",
        answers: ["", "", ""],
        correct: ""
    },
    {
        question: "",
        answers: ["", "", ""],
        correct: ""
    },
    {
        question: "",
        answers: ["", "", ""],
        correct: ""
    },
    {
        question: "",
        answers: ["", "", ""],
        correct: ""
    },
    {
        question: "",
        answers: ["", "", ""],
        correct: ""
    },
];

