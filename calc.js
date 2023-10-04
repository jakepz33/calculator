let output = document.querySelector(".output")
let outputNum = "";
output.textContent = outputNum;
console.log(output.textContent);

// every button pressed gets stored into an array,
// use an array method to keep a running output of function?
var arrayButtons = []

function addition() {

}

let calculator = {
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
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break
        case "/":
            result = num1 / num2;
            break;
        default:
            throw new Error("invalid Operation");

    }
    arrayButtons.push(result);
    return result;
}

console.log(operation(3, 20, "*"));
console.log(arrayButtons.length);

// let numOne = calculator["three"].toString();
// let numTwo = calculator["seven"].toString();

// console.log(numOne+numTwo);

// arrayButtons.push(3)
// arrayButtons.push(5)
// arrayButtons.push(8)

console.log(arrayButtons);

//ADD BUTTON TO SCREEN
output.textContent = "";

let numOne = 0;
let numTwo = 0;
let operator = null;

console.log(operator)

function getInitialValues(item) {
    // output.textContent = ""
    output.textContent = output.textContent + item;
    let numOuput = parseInt(output.textContent);
    console.log('TYPE', numOuput);
    //console.log('Output', numOuput);
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if(Object.values(calculator).includes(buttonText)) { 
            console.log('is a number');
            getInitialValues(buttonText)

        } else {
            console.log("not a number");
            operator = buttonText;
            //console.log(operator);
            // call button
        }

        //console.log(typeof buttonText);
        ;
    })
})



// console.log(calculator["three"],calculator["three"].split(', '))