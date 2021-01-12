//Test questions Array
var questions = [
    {
        question: "What naming convention is used for variable names?",
        answers: ["camelCase", "PascalCase", "snake_case"],
        correct: "camelCase"
    },
    {
        question: "What is used to create single line comments in a JavaScript file?",
        answers: ["//", "//->", "-->"],
        correct: "//"
    },
    {
        question: "What file extension is used for all JavaScript files",
        answers: [".script", ".js", ".index"],
        correct: ".js"
    },
    {
        question: "How do you call a function?",
        answers: ["function()", "function{}", "func()"],
        correct: "function()"
    },
    {
        question: "How do you create an alert?",
        answers: ["prompt(' ')", "alert(' ')", "console.log(' ')"],
        correct: "alert(' ')"
    },
    {
        question: "What symbol denotes an array?",
        answers: ["{}", "()", "[]"],
        correct: "[]"
    },
];

//Buttons
var startBtn = document.getElementById('start-btn');
var answer1 = document.getElementById('btn1');
var answer2 = document.getElementById('btn2');
var answer3 = document.getElementById('btn3');
var highScoresBtn = document.getElementById('highscores');

//Containers and Divs
var welcome = document.getElementById('welcome-div');
var questionDiv = document.getElementById('questions-div');
var finishedDiv = document.getElementById('finished');
var highScoresDiv = document.getElementById('highscores-div');
var form = document.getElementById('form');

//Other variables
var timeLeft = 60;
var questionNum = 0;
var timer = document.getElementById('timer');
var questionTitle = document.getElementById('question-title');
var user = document.getElementById('user');
var endscore = document.getElementById('endscore');
var highScoreList = document.getElementById('highscore-list');
var yourEndScore = 0;

//Check local storage at beginning of quiz
var highscore;
if (localStorage.getItem('high scores')) {
    highscore = JSON.parse(localStorage.getItem('high scores'));
} else {
    highscore = {
        'name': [],
        'score': []
    };
};

//Eventlistener for high score button
highScoresBtn.addEventListener('click', function () {
    displayScores();
});

//Function to display high scores
function displayScores()

//Function to start quiz and timer
startBtn.addEventListener('click', function () {
    startQuiz();
});

function startQuiz() {
    //Hide welcome message
    welcome.setAttribute('class', 'container hidden');
    questionDiv.setAttribute('class', 'container');

    questionDiv.addEventListener('click', function (event) {
        if (event.target.matches('button')) {
            yourEndScore + 10;
            questionNum++;
        } else {
            timeLeft - 5;
            questionNum++;
        };
    });


    var timeInterval = setInterval(function () {
        timer.textContent = timeLeft
        timeLeft--;

        questionTitle.innerText = questions[questionNum]['question'];
        answer1.innerText = questions[questionNum]['answers'][0];
        answer2.innerText = questions[questionNum]['answers'][1];
        answer3.innerText = questions[questionNum]['answers'][2];

        if (timeLeft <= 0 || questionNum === questions.length - 1) {
            timer.textContent = "";
            clearInterval(timeInterval);
            finished();
        };
    }, 1000);
};
function showQuestions(currentQuestion) {
    console.log(currentQuestion);
};

function finished() {
    questionDiv.setAttribute('class', 'container hidden');
    finishedDiv.setAttribute('class', 'container');


};