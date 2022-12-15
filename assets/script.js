var startBtn = document.querySelector('#startBtn')
var timerEl = document.querySelector('#timer');
var count;
var timerSeconds = 60;
var questionIndex = 0;

var gameScore = 60;

// User click to start game 
// Random question presetned
// Once game started start countdown 
// Remove time if the anwser is incorrect
// Add score if the anwser is correct 
// if time runs out end game to show resuslts page

// This is just the timer start for the game.
function timer() {
    count = setInterval(function () {
        timerSeconds--;
        timerEl.textContent = timerSeconds;
        if (timerSeconds <= 0) {
            clearInterval(count);
            gameOver()
        }
    }, 1000)
    return timerSeconds;
}
// When the game starts this would remove our inital start button and start the timer and display questions
function gameStart() {
    startBtn.remove();
    
    const currentQuestion = questions[questionIndex];
    displayQuestion(currentQuestion);
    timer();
}
// This will save the time as the game score and set it to localstorage. Then it takes you to the highsocres page.
function gameOver() {
    const scoretimer = gameScore - timerSeconds
    localStorage.setItem('score', JSON.stringify(scoretimer))
    location.href = "Highscores.html"
}
//add an event lister where clicking start will start the game.
startBtn.addEventListener('click', gameStart);
// This checks if the user click on the correct answer if they chose wrong it subtracts 15 seconds.
function answerCheck(event) {
    console.log(event.target.textContent)
    if (questions[questionIndex].correctAnswer !== event.target.textContent) {
        timerSeconds = timerSeconds - 5
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        gameOver();
    } else {
        displayQuestion(questions[questionIndex])
    }
}
// This function gets the id in the HTML and create buttons and an h2 to append to the page.
function displayQuestion(question) {
    const questionEl = document.createElement('h2');

    questionEl.textContent = question.question;
    document.getElementById('questions').innerHTML = "";
    document.getElementById('questions').append(questionEl);

    const optionA = document.createElement('button');
    optionA.textContent = questions[questionIndex].answers.a;
    document.getElementById('option-1').innerHTML = "";
    document.getElementById('option-1').appendChild(optionA);
  

    const  optionB = document.createElement('button');
    optionB.textContent = questions[questionIndex].answers.b;
    document.getElementById('option-2').innerHTML = "";
    document.getElementById('option-2').appendChild(optionB);
  


    const optionC = document.createElement('button');
    optionC.textContent = questions[questionIndex].answers.c;
    document.getElementById('option-3').innerHTML = "";
    document.getElementById('option-3').appendChild(optionC)
   



    const optionD = document.createElement('button');
    optionD.textContent = questions[questionIndex].answers.d;
    document.getElementById('option-4').innerHTML = "";
    document.getElementById('option-4').appendChild(optionD);
        // This makes it so when you click on one of the options it will compare it to the answer.
        optionA.onclick = answerCheck;
        optionB.onclick = answerCheck;
        optionC.onclick = answerCheck;
        optionD.onclick = answerCheck;
  

};
//An Array of our spongebob questions
var questions = [
    {
        question: "Which of these did Patrick think was an instrument?",
        answers: {
            a: "Ketchup",
            b: "Relish",
            c: "Mayonnaise",
            d: "Mustard"
        },
        correctAnswer: "Mayonnaise"
    },
    {
        question: "When is the best time to wear a stripe sweater?",
        answers: {
            a: 'All the time',
            b: "holidays",
            c: "parties",
            d: "concert"
        },
        correctAnswer: 'All the time'
    },
    {
        question: "What does Spongebob SquarePants live in?",
        answers: {
            a: "Anchor ",
            b: "Pineapple",
            c: "Rock",
            d: "Boat"
        },
        correctAnswer: 'Pineapple'
    },
    {
        question: "What Kind of animal is Squidward?",
        answers: {
            a: "Squid",
            b: "Octopus",
            c: "Lobster",
            d: "Eel"
        },
        correctAnswer: 'Octopus'
    },
    {
        question: "What instrument does Squidward play?",
        answers: {
            a: "Saxophone",
            b: "guitar",
            c: "violin",
            d: "clarinet"
        },
        correctAnswer: "violin"
    },
    {
        question: "What type of animal is Pearl, Mr.Krabs's daughter?",
        answers: {
            a: "Crab",
            b: "Starfish",
            c: "Whale",
            d: "Shark"
        },
        correctAnswer: "Whale"
    },
    {
        question: "What is the name of SpongeBob's pet snail?",
        answers: {
            a: "Mary",
            b: "Gary",
            c: "Jerry",
            d: "Larry"
        },
        correctAnswer: "Gary"
    },
    {
        question: "Where os Sandy Cheeks from?",
        answers: {
            a: "Seattle",
            b: "Texas",
            c: "Philadelphia",
            d: "Los Angeles"
        },
        correctAnswer: "Texas"
    },
    {
        question: "Who is Bikini Bottom's favorite superhero?",
        answers: {
            a: "Mermaid Man",
            b: "Neptune",
            c: "Aquaman",
            d: "Flash"
        },
        correctAnswer: "Mermaid Man"
    },
    {
        question: "Where did spongebob famously ripped his pants?",
        answers: {
            a: "Krusty Krab",
            b: "his house",
            c: "Treedome",
            d: "Goo Lagoon"
        },
        correctAnswer: "Goo Lagoon"
    },
]
































