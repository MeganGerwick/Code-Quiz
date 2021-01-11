//Set variables
var score = 0
var indexQ = 0
// var currentQ = questions[indexQ];
var welcomeHeading = document.querySelector("#heading");
var startBtn = document.querySelector("#start-btn");
var questionTitle = document.querySelector("#question-title");

//Welcome message
function welcomeMessage() {
    welcomeHeading.textContent = "Coding Quiz Challenge";
    questionTitle.textContent = "It's time to test your knowledge of JavaScript! You will have 60 seconds to answer 6 questions. Click the start button to begin.";
};

//Clear Welcome
function clearWelcome() {
    welcomeHeading.textContent = "";
    questionTitle.textContent = "";
    startBtn.remove;
};

//Timer
var start = document.querySelector("#start-btn");
var timer = document.querySelector(".timer")
var timeLeft = 60

startQuiz.addEventListener("click", function setTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
        clearWelcome();
        if (timeLeft === 0) {
            clearTimeout(timerInterval);
            gameOver();
        }
        else {
            beginQuiz()
        }
    });
});

//Quiz functions
function beginQuiz() {
    var question = document.querySelector("#question-title");
    var questions = document.querySelector("#answers");
    var submitBtn = document.createElement("button");

}
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

//Quiz Functions
welcomeMessage();
console.log(welcomeHeading);