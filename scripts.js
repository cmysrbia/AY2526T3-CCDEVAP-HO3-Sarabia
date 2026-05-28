let score = 0; // current score
let answer = 0; // current answer
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
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
    }
}

// check answer
function checkAnswer(){
    let input = Number(document.getElementById("answer").value);
    let message = document.getElementById("message");

    if (input === answer){
        score++;
        message.innerHTML = "Correct!";
        message.style.color = "green";
    } else {
        message.innerHTML = "Wrong! Correct answer is " + currentAnswer + ".";
        message.style.color = "red";
    }

    // update score
    document.getElementById("score").innerHTML = score;
    // clear input
    document.getElementById("answer").value = "";

    // check win condition
    if (score === 5){
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    } else {
        // generate next question
        generateQuestion();
    }
}

// play again
function playAgain(){

    // reset
    score = 0;
    document.getElementById("score").innerHTML = score;
    // hide sucess message
    document.getElementById("div-success").style.display = "none";
    // show question section
    document.getElementById("div-questions").style.display = "block";
    // clear prev msg
    document.getElementById("message").innerHTML = "";
    // clear input
    document.getElementById("answer").value = "";

    generateQuestion();
}

