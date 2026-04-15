const quizQuestions = [
    {question: "Which keyword is used to declare a variable that can be reassigned?", options: ["const", "let", "var", "Both let and var"], correctIndex: 3}, 
    {question: "How do you access the first element of an array named 'colors'?", options: ["colors[1]", "colors(0)", "colors.first", "colors[0]",], correctIndex: 3}, 
    {question: "What is the result of '5' + 2 in JavaScript?", options: ["7", "52", "undefined", "NaN"], correctIndex: 1}, 
    {question: "Which operator is used to check if TWO conditions are both true?", options: ["||", "!", "&&", "++"], correctIndex: 2}, 
    {question: "What is the result of the expression 10 % 3?", options: ["3", "0", "1", "3.33"], correctIndex: 2}, 
    {question: "What do you call the placeholders defined in a function's parentheses?", options: ["Arguments", "Parameters", "Variables", "Indices"], correctIndex: 1}, 
    {question: "Which of these is the correct way to write an 'if' statement?", options: ["if i = 5 then", "if (i == 5", "if i == 5", "if {i == 5}"], correctIndex: 1}];

function loadQuestion(){
    currentQuestion.options.forEach((options, index) => {const optionButton = document.createElement('button'); optionButton.textContent = optionButton; optionButton.addEventListener("click", () => selectOption(index)); optionsContainer.appendChild(optionButton);});
}