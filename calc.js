let output = document.querySelector(".output")
//let outputNum = "";
//output.textContent = outputNum;
console.log(output.textContent);

// every button pressed gets stored into an array,
// use an array method to keep a running output of function?
var arrayButtons = []

function addition() {

}

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
    let firstArg = parseFloat(num1);
    let secondArg = parseFloat(num2);
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
let isNegative = false;

// arrayButtons.push(3)
// arrayButtons.push(5)
// arrayButtons.push(8)

console.log(arrayButtons);

//ADD BUTTON TO SCREEN
output.textContent = "";


function addToScreen(item) {
    // if(numTwo ==="") {
    //     renewScreen();
    // }
    if(item==="-" && numOne===""){
        console.log('ItemOutput:', item);
        output.textContent = item;
    }else if(item==="-" && numTwo===""){
        console.log('ItemOutput2:', item);
        output.textContent = item;
    }else{
        if(isNegative === true && numOne!=""){
            //isNegative = false;
            output.textContent = "";
            if(item < 0) {
                output.textContent = "-"+((-1)*item);
                console.log('Negative num', output.textContent);
            }else{
                output.textContent = "-"+ item;
                console.log('Negative num2', output.textContent)
            };
            
        } else if(isNegative === true && numTwo!=""){
            output.textContent = "";
            if(item < 0) {
                output.textContent = "-"+((-1)*item);
                console.log('Negative num', output.textContent);
            }else{
                output.textContent = "-"+ item;
                console.log('Negative num2', output.textContent)
            };
        }else{
            output.textContent = item;
            let numOuput = parseFloat(output.textContent);
            console.log("Total Solution", output.textContent);
        }
        //output.textContent = item;
        //let numOuput = parseInt(output.textContent);
        //console.log("numOutputty", output.textContent);
    };
    // output.textContent = item;
    // let numOuput = parseInt(output.textContent);
    // console.log("numOutput", numOuput);
}

function renewScreen() {
    output.textContent = "";
}
function clearVariables(){
    numOne = "";
    numTwo = "";
    operator = "";
    output.textContent = "";
    arrayButtons = [],
    isNegative = false;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
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
                addToScreen(numTwo); // where we display num2 and assign to num2
            }
        } else {
            if(buttonText ==="C"){
                clearVariables();
            }else if(buttonText==="."){
                decimalButton();
            }else if(buttonText==="+/-"){
               let negativeNum = makeNegative();
               console.log('Is negative:', isNegative);
            // might need funciton here
               addToScreen(negativeNum);
               //if()
            }else if(numTwo === "") { // any regular operator case
                operator = buttonText;
                if (arrayButtons.length === 0) {
                    if(isNegative){
                        postNegative(); // function makes item negative and adds to list
                        // numOne = (-1) * parseInt(numOne);
                        // arrayButtons.push(numOne)
                        // isNegative = false;
                    }else{
                        arrayButtons.push(numOne) // if not negative, push as normal
                    }
                }
                //arrayButtons.push(numOne)
                console.log(arrayButtons);
                console.log(operator);
                console.log("numTwo is empty")
            } else {
                if(buttonText === "=") {
                    if(isNegative){
                        postSecondNegative();
                    }
                    operation(numOne, numTwo, operator);
                } else {
                    if(isNegative){
                        postSecondNegative();
                    }
                    //postNegative();
                    console.log('NumOne', numOne, 'Numtwo', numTwo, 'Operator', operator);
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

function makeNegative() {
    if(output.textContent==="") {
        console.log('this works')
        isNegative = true;
        let negString = "-"
        return(negString);
    }else{
        if(operator!="" && numTwo===""){
            isNegative = true;
            return "-";
        }else{
            console.log('didnt work');
            let changedNum = (-1) * parseFloat(output.textContent);
            isNegative = true;
            return changedNum; // return output.text as a negative number
        }
        // console.log('didnt work');
        // let changedNum = (-1) * parseInt(output.textContent);
        // isNegative = true;
        // return changedNum; // return output.text as a negative number
    }
    // let changedNum = (-1) * parseInt(output.textContent);
    //isNegative = true;
    // return changedNum;
}

function postNegative() {
    numOne = (-1) * parseFloat(numOne);
    arrayButtons.push(numOne)
    isNegative = false;
}

function postSecondNegative() {
    numTwo = (-1) * parseFloat(numTwo);
    isNegative = false;
}

//makeNegative();



// console.log(calculator["three"],calculator["three"].split(', '))

// need decimal button and delete button

//
function decimalButton() {
    if(operator ==="" && !numOne.includes('.')){
        numOne += '.';
        addToScreen(numOne);
    }else if (operator !== "" && !numTwo.includes('.')){
        numTwo += '.';
        addToScreen(numTwo);
    }
}