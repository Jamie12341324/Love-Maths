document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")==="submit"){
                checkAnswer();
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

function runGame(gameType){
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;

    if (gameType=="addition"){
        console.log("hello");
        displayAdditionQuestion(num1,num2);
    }else if (gameType=="multiply") {
        displayMultiplyQuestion(num1,num2);
    }else if (gameType=="subtract"){
        displaySubtractQuestion(num1,num2);
    }
}
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    if (userAnswer==calculatedAnswer[0]){
        incrementScore()
        alert("Hey! You got it right! :D");
    } else{
        incrementwrongAnswer()
        alert("Awwww.... you answered "+userAnswer+". The correct answer was "+calculatedAnswer[0]);
        
    }
    runGame(calculatedAnswer[1]);
}
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    if (operator=="+"){
        return [operand1+operand2, "addition"];
    }else if (operator=="x"){
        return [operand1*operand2, "multiply"];
    }else if (operator=="-"){
        return [operand1-operand2, "multiply"];
    }
    else{
        alert("unknown oerator"+operator);
    }
}
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}
function incrementwrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
function displayAdditionQuestion(operand1,operand2){
    console.log("hello2");
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}
function displaySubtractQuestion(operand1,operand2){
    if(operand1>operand2){
        document.getElementById("operand1").textContent = operand1;
        document.getElementById("operand2").textContent = operand2;
    }else{
        document.getElementById("operand1").textContent = operand2;
        document.getElementById("operand2").textContent = operand1;
    }
    document.getElementById("operator").textContent = "-";
}
function displayMultiplyQuestion(operand1,operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}
function displayDivisionQuestion(){
    
}