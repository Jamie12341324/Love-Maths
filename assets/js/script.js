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
    }else{
        alert("unkown game type:"+gameType);
        throw "unkown game type:"+gameType+".Aborting!";
    }
}
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    if (userAnswer==calculatedAnswer[0]){
        alert("Hey! You got it right! :D");
    } else{
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
    }else{
        alert("unknown oerator"+operator);
    }
}
function incrementScore(){

}
function incrementwrongAnswer(){

}
function displayAdditionQuestion(operand1,operand2){
    console.log("hello2");
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}
function displayDivisionQuestion(){
    
}