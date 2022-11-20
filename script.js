

const screen = document.getElementById("screen");
const buttonsContainer = document.getElementById("buttonsContainer");
const funcContainer = document.getElementById("funcContainer");
const evalContainer = document.getElementById("evalContainer");

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

num.forEach(i => {
  var button = document.createElement("button");
  button.innerText = i;
  
  button.addEventListener("click", function() {
    let input = document.createElement('span');
    input.textContent = button.textContent;
    screen.appendChild(input);
  })
  buttonsContainer.appendChild(button);

})

const func = ["+", "-", "/", "*", "(", ")", "neg"];
func.forEach(i => {
    var funcButton = document.createElement("button");
    funcButton.innerText = i;

    funcButton.addEventListener("click", function() {
        let funcInput = document.createElement('span');
        funcInput.textContent = funcButton.textContent;
        screen.appendChild(funcInput);

    })
    funcContainer.appendChild(funcButton)
})

const eval = ["clear", "="];
eval.forEach(i => {
    var evalButton = document.createElement("button");
    evalButton.innerText = i;

    evalButton.addEventListener("click", function() {
        console.log(evalButton.textContent);
    })
    evalContainer.appendChild(evalButton);
})


//log what is on screen 
function pullData(){
    console.log(screen);
}

