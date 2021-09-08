const quizQuestions = [
    {
        questionOne: 'Which of these is NOT a reserved word?',
        1: 'goto',
        2: 'native',
        3: 'delete',
        4: 'into',
    },
    {
        questionTwo: 'the Date() function returns which of the following:',
        1: 'object',
        2: 'boolean',
        3: 'string',
        4: 'interger',
    },
    {
        questionThree: 'What character do you use to write single line comments in JavaScript?',
        1: '--',
        2: '//',
        3: '~~',
        4: '``',
    },
    {
        questionFour: 'Which company developed Javascript?',
        1: 'Oracle',
        2: 'Bell Laboratories',
        3: 'Microsoft',
        4: 'Netscape'
    }
];
const correctAnswers = ['into','string','//','Netscape'];
const quizButtons = document.getElementsByClassName('quizAnswerButton');
const quizPopup = document.getElementById('answerNotification');

let currentQuestion = 0;
let finalScore = 0;

loadQuestions(currentQuestion);

quizButtons.addEventListener("click", () => {
    if (correctAnswers.some(quizButton.value) === true) {
        finalScore += 10;
        quizPopup.value = 'Correct!';
    } else {
        quizPopup.value = 'Incorrect!';
    }
    currentQuestion += 1
    loadQuestions(currentQuestion);
});     

function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer , 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

window.onload = function () {
    const twoMinutes = 120,
        display = document.getElementById('time');
    startTimer(twoMinutes, display);
};