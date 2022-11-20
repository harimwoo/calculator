

const screen = document.getElementById("screen");
const buttonsContainer = document.getElementById("buttonsContainer");
const funcContainer = document.getElementById("funcContainer");
const evalContainer = document.getElementById("evalContainer");
let a; 
let b = '';
let operand;


const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

num.forEach(i => {
  var button = document.createElement("button");
  button.innerText = i;
  
  button.addEventListener("click", function() {

    if(operand !== undefined){
        let input = document.createElement('span');
        input.textContent = button.textContent;
        screen.appendChild(input);
        b += button.textContent;
    } else {
    let input = document.createElement('span');
    input.textContent = button.textContent;
    screen.appendChild(input);
    }
  })

  buttonsContainer.appendChild(button);

})



let addButton = document.createElement("button");
addButton.innerText = "+";
addButton.addEventListener("click",function(){
    let funcInput = document.createElement('span');
    funcInput.textContent = addButton.textContent;
    a = screen.textContent;
    operand = add;
    screen.appendChild(funcInput);
} );
funcContainer.appendChild(addButton);

let subtractButton = document.createElement("button");
subtractButton.innerText = "-";
subtractButton.addEventListener("click",function(){
    let funcInput = document.createElement('span');
    funcInput.textContent = subtractButton.textContent;
    a = screen.textContent;
    operand = subtract;
    screen.appendChild(funcInput);
} );
funcContainer.appendChild(subtractButton);


let multiplyButton = document.createElement("button");
multiplyButton.innerText = "*";
multiplyButton.addEventListener("click",function(){
    let funcInput = document.createElement('span');
    funcInput.textContent = multiplyButton.textContent;
    a = screen.textContent;
    operand = multiply;
    screen.appendChild(funcInput);
} );
funcContainer.appendChild(multiplyButton);

let divideButton = document.createElement("button");
divideButton.innerText = "/";
divideButton.addEventListener("click",function(){
    let funcInput = document.createElement('span');
    funcInput.textContent = divideButton.textContent;
    a = screen.textContent;
    operand = divide;
    screen.appendChild(funcInput);
} );
funcContainer.appendChild(divideButton);





let evalButton = document.createElement("button");
evalButton.innerText = "=";
evalButton.addEventListener("click",function(){

    let result = document.createElement('span')
    result.textContent = (operate(a, b, operand));
    removeAllChildNodes(screen);
    screen.appendChild(result);
    a = result.textContent;
    operand === undefined;
    b = '';
} );
evalContainer.appendChild(evalButton);

let clearButton = document.createElement("button");
clearButton.innerText = "clear"
clearButton.addEventListener("click",function(){
    removeAllChildNodes(screen);
    operand = undefined;
    a = 0; 
    b = '';
} );
evalContainer.appendChild(clearButton);


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a, b){
    return Number(a) / Number(b);
}

function operate(a, b, operand){
    return operand(a, b); 
}

function getDisplayValue(){
    let displayValue = screen.textContent;
}