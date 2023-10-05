let output = document.querySelector(".output")
let outputNum = "";
output.textContent = outputNum;
console.log(output.textContent);

// every button pressed gets stored into an array,
// use an array method to keep a running output of function?
var arrayButtons = []


let calculator = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6", 
    seven: "7",
    eight: "8",
    nine: "9",

}


function operation(num1, num2, operator) {
    let firstArg = parseInt(num1);
    let secondArg = parseInt(num2);
    result = 0
    switch(operator) {
        case "+":
            result = firstArg+secondArg;
            break;
        case "-":
            result = firstArg-secondArg;
            break;
        case "*":
            result = firstArg*secondArg;
            break;
        case "/":
            result = firstArg/secondArg;
            break;
        case "%":
            result = (firstArg/100) * secondArg;
            break;
    }
    arrayButtons.push(result);
    console.log("result", result);
    console.log(arrayButtons);
    addToScreen(result);
    numTwo = "";
    console.log(numTwo);
    return result;
}

let numOne = "";
let numTwo = "";
let operator = "";

console.log("Current array:", arrayButtons);

//ADD BUTTON TO SCREEN
output.textContent = "";

function addToScreen(item) {
    output.textContent = item;
    let numOuput = parseInt(output.textContent);
    console.log("Screen view:", numOuput);
}

function renewScreen() {
    output.textContent = "";
}

function clearVariables(){
    numOne = "";
    numTwo = "";
    operator = "";
    output.textContent = "";
    arrayButtons = []
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('clicked-button');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('clicked-button');
    })

    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (Object.values(calculator).includes(buttonText)) {
            console.log('In object');
            if (arrayButtons.length === 0) {
                numOne = numOne + buttonText;
                console.log('NumOne:', numOne);
                //arrayButtons.push(numOne);
                addToScreen(numOne);
            } else {
                numOne = arrayButtons[arrayButtons.length-1];
                // clear screen function
                numTwo = numTwo + buttonText;
                console.log("numOne:", numOne);
                console.log("numtwo:", numTwo);
                addToScreen(numTwo);
            }
        } else {
            if(buttonText ==="C"){
                clearVariables();
            }else if(numTwo === "") {
                operator = buttonText;
                if (arrayButtons.length === 0) {
                    arrayButtons.push(numOne)
                }
                //arrayButtons.push(numOne)
                console.log(arrayButtons);
                console.log(operator);
                console.log("Need num2 value:");
            } else {
                if(buttonText === "=") {
                    operation(numOne, numTwo, operator);
                } else {

                    operation(numOne, numTwo, operator)
                    operator = buttonText;
                    console.log('Operator', operator);
                    //arrayButtons.push(numOne)
                    console.log(arrayButtons);
                    //operation(numOne, numTwo, operator);
                }
            }
        
        }
    })
})



// console.log(calculator["three"],calculator["three"].split(', '))