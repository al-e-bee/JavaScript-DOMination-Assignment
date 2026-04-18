
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question-container");
const optionsElement = document.getElementById("options-container");
const getNextQuestion = document.getElementById("next");
const restartQuiz = document.getElementById("restart");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
    {question: "Which keyword is used to declare a variable that can be reassigned?", options: ["const", "can", "allow", "let"], correctIndex: 3}, 
    {question: "How do you access the first element of an array named 'colors'?", options: ["colors[1]", "colors(0)", "colors.first", "colors[0]",], correctIndex: 3}, 
    {question: "What is the result of '5' + 2 in JavaScript?", options: ["7", "52", "undefined", "NaN"], correctIndex: 1}, 
    {question: "Which operator is used to check if TWO conditions are both true?", options: ["||", "!", "&&", "++"], correctIndex: 2}, 
    {question: "What is the result of the expression 10 % 3?", options: ["3", "0", "1", "3.33"], correctIndex: 2}, 
    {question: "What do you call the placeholders defined in a function's parentheses?", options: ["Arguments", "Parameters", "Variables", "Indices"], correctIndex: 1}, 
    {question: "Which of these is the correct way to write an 'if' statement?", options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if {i == 5}"], correctIndex: 1}];


function loadQuestion(){
   const currentQuestion = quizQuestions[currentQuestionIndex];  // Get current question object from array

   questionElement.innerText = currentQuestion.question; // Put the question text into the H1 or Div

   optionsElement.innerHTML = ""; // Clear the old options so they don't pile up

    // Loop through the options and create buttons for each
   currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");

    // Add a click event to each button
    button.addEventListener("click", () => handleAnswer(index));

    optionsElement.appendChild(button);
   });
}

function handleAnswer(selectedIndex){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach((btn, index) => {
        btn.disabled = true;

        if(index === selectedIndex){
        if(index === currentQuestion.correctIndex){
            btn.style.backgroundColor = "green";
        } else if (index === selectedIndex){
            btn.style.backgroundColor = "red";
        }
    }
    }); 

    if(selectedIndex === currentQuestion.correctIndex){
        score++;
    } 
}

function next(){
    if(currentQuestionIndex < quizQuestions.length - 1){
        currentQuestionIndex++;
        loadQuestion();
    } else {
       showScore();
    }
}

function showScore(){
    quizContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreText.innerText = `${score} out of ${quizQuestions.length}`;
}

function restart(){
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    loadQuestion();
}


getNextQuestion.addEventListener("click", next);

restartQuiz.addEventListener("click", restart);

loadQuestion();