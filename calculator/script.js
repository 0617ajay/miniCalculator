const input = document.querySelector("#userInput");
let expression="";
function press(num){
    expression+=num;
    input.value = expression;
}

function equal(){
    input.value = eval(expression);  
    expression="";
}
function erase(){
    input.value="";
}