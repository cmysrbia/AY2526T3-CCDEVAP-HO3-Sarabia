// global variables
let score = 0;
let currentAnswer = 0;
const operations = ["+", "-", "*"];

// generate question
function generateQuestion(){

    // randomize numbers (0 - 10)
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 11);

    // random operation
    let operation = operations[Math.floor(Math.random() * operations.length)];

    // display question
    document.getElementById("question").innerHTML =
        num1 + " " + operation + " " + num2;

    // compute answer
    switch (operation){
        case "+":
            currentAnswer = num1 + num2;
            break;

        case "-":
            currentAnswer = num1 - num2;
            break;

        case "*":
            currentAnswer = num1 * num2;
            break;
    }
}

