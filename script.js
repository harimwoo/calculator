

const screen = document.getElementById("screen");
const buttonsContainer = document.getElementById("buttonsContainer");
const funcContainer = document.getElementById("funcContainer");
const evalContainer = document.getElementById("evalContainer");
let a; 
let b = '';
let operand;
let usedDecimal = false;


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

    if(operand !== undefined){
        let result = document.createElement('span')
        result.textContent = (operate(a, b, operand));
        removeAllChildNodes(screen);
        screen.appendChild(result);
        a = result.textContent;
        operand = undefined;
        b = '';
        usedDecimal = false;

    }


    let funcInput = document.createElement('span');
    funcInput.textContent = addButton.textContent;
    a = screen.textContent;
    operand = add;
    screen.appendChild(funcInput);
    usedDecimal = false;
} );
funcContainer.appendChild(addButton);

let subtractButton = document.createElement("button");
subtractButton.innerText = "-";
subtractButton.addEventListener("click",function(){

    if(operand !== undefined){
        let result = document.createElement('span')
        result.textContent = (operate(a, b, operand));
        removeAllChildNodes(screen);
        screen.appendChild(result);
        a = result.textContent;
        operand = undefined;
        b = '';
        usedDecimal = false;

    }


    let funcInput = document.createElement('span');
    funcInput.textContent = subtractButton.textContent;
    a = screen.textContent;
    operand = subtract;
    screen.appendChild(funcInput);
    usedDecimal = false;
} );
funcContainer.appendChild(subtractButton);


let multiplyButton = document.createElement("button");
multiplyButton.innerText = "*";
multiplyButton.addEventListener("click",function(){

    if(operand !== undefined){
        let result = document.createElement('span')
        result.textContent = (operate(a, b, operand));
        removeAllChildNodes(screen);
        screen.appendChild(result);
        a = result.textContent;
        operand = undefined;
        b = '';
        usedDecimal = false;

    }


    let funcInput = document.createElement('span');
    funcInput.textContent = multiplyButton.textContent;
    a = screen.textContent;
    operand = multiply;
    screen.appendChild(funcInput);
    usedDecimal = false;
} );
funcContainer.appendChild(multiplyButton);

let divideButton = document.createElement("button");
divideButton.innerText = "/";
divideButton.addEventListener("click",function(){

    if(operand !== undefined){
        let result = document.createElement('span')
        result.textContent = (operate(a, b, operand));
        removeAllChildNodes(screen);
        screen.appendChild(result);
        a = result.textContent;
        operand = undefined;
        b = '';
        usedDecimal = false;

    }


    let funcInput = document.createElement('span');
    funcInput.textContent = divideButton.textContent;
    a = screen.textContent;
    operand = divide;
    screen.appendChild(funcInput);
    usedDecimal = false;
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
    operand = undefined;
    b = '';
    usedDecimal = false;
} );
evalContainer.appendChild(evalButton);

let clearButton = document.createElement("button");
clearButton.innerText = "clear"
clearButton.addEventListener("click",function(){
    removeAllChildNodes(screen);
    operand = undefined;
    a = null; 
    b = '';
    usedDecimal = false;
} );
evalContainer.appendChild(clearButton);

let decimalButton = document.createElement("button");
decimalButton.innerText = ".";
decimalButton.addEventListener("click", function(){

    if(usedDecimal === false && operand === undefined){
        let decimal = document.createElement('span');
        decimal.textContent = decimalButton.innerText;
        screen.appendChild(decimal);
        usedDecimal = true;
    } else if(usedDecimal === false && operand !== undefined){
        let decimal = document.createElement('span');
        decimal.textContent = decimalButton.innerText;
        screen.appendChild(decimal);
        b += decimal.textContent;
        usedDecimal = true;
    }
    
})
evalContainer.appendChild(decimalButton)


let deleteButton = document.createElement('button');
deleteButton.innerText = "delete"
deleteButton.addEventListener('click', function(){
    
    

    //123 + 43 -> get rid of 3 
    if(b.length > 0){
       b = b.slice(0, b.length-1);
       screen.removeChild(screen.lastElementChild);
    } else if(operand !== undefined){
        screen.removeChild(screen.lastElementChild);
        operand = undefined;
    } else {
        screen.removeChild(screen.lastElementChild);
    }


})
evalContainer.appendChild(deleteButton);


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


