var startBut = document.querySelector("#start-btn");
var timerEl = document.querySelector(".timer");
var startScreenEl = document.querySelector("#start-screen");
var timerId = document.querySelector("#time");
var questions = document.querySelector("#question-container");


var questions = [
    {
      questionTitle: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      questionTitle: 'The conidition of an if/else statement is enclosed with ',
    choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    answer: 'curly brackets',
    },
    {
      questionTitle: 'Strings must be enclosed with',
      choices: ['parenthesis', 'brackets', 'quotes'],
      answer: 'quotes',
    }]

    startBut.addEventListener('click', startGame);

function startGame() {
    startBut.classList.add('hide')
    questions.classList.remove('hide')
    nextQuestion()
}

   startBut.addEventListener('click', function() {
      startQuiz();
    });

    questions.setAttribute('class', 'hide');
  
    questionsEl.removeAttribute('class');
  
    timerId = setInterval(clockTick, 1000);
  
    timerEl.textContent = time;
  
  function clockTick() {
  
    time--;
    timerEl.textContent = time;
  
    if (time <= 0) {
      quizEnd();
    }
  }
  startQuiz();
  
    // event.preventDefault();

// function countdown() {
//     var timeAmount = 80;
//     console.log(timeAmount);
//     var timeInterval = setInterval(function() {
//         // timerCount = timeAmount;
//          timeAmount--;
//         if(timeAmount === 0) {
//             clearInterval(timeInterval);
//         }
//     } ,1000);
// }