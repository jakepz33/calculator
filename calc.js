let output = document.querySelector(".output")
console.log(output.textContent);
let numOne = "";
let numTwo = "";
let operator = "";
let isNegative = false;
output.textContent = "";


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


function operation(num1, num2, op) {
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
    operator = ""; 
    console.log(numTwo);
    return result;
}




console.log(arrayButtons);

//ADD BUTTON TO SCREEN

// function to add inputs to screen
function addToScreen(item) {

    //first two if statements add a negative sign if they are selected before a number

    if(item==="-" && numOne===""){          // if negative button(+/-) is clicked and numOne not assigned, outputs "-" sign
        console.log('ItemOutput:', item);
        output.textContent = item;
    }else if(item==="-" && numTwo===""){   // if negative button(+/-) is clicked & numtwo not assigned, output "-" sign
        console.log('ItemOutput2:', item);
        output.textContent = item;
    }else{

        // if the number is added after there is a negative on screen already

        if(isNegative === true && numOne!=""){ // if negative is true and numOne is not empty
            output.textContent = "";
            // if the item returned after 
            if(item < 0) {                     //if item is already returned negative
                output.textContent = item;     // assign text-content to negative num
                console.log('Negative num vat', output.textContent);

            }else{                              // else if item is returned as positive but needs to be turned negative
                console.log("func2 item:", item)  // takes number as positive, but will show as negative
                output.textContent = "-"+ item;  // add negative sign
                console.log("NumOne:", numOne);  
                console.log('Negative num2', output.textContent)
            };
            
        } else if(isNegative === true && numTwo!=""){ // if negative is true and numTwo assigned
            output.textContent = "";
            if(item < 0) {                            // if item is negative show negative value on screen
                output.textContent = item;      
                console.log('Negative num', output.textContent);
            }else{
                output.textContent = "-"+ item;     // if negative is true and numTwo assigned. Changes 
                //numOne = parseFloat(output.textContent);
                console.log('changing this one', output.textContent)
            };
        }else{
            output.textContent = item;
            let numOuput = parseFloat(output.textContent);
            console.log("Total Solution", output.textContent);
        }
        
    };
    
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


/* Selects all buttons on calculator and adds an event listener to all of them */

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        let activeButton = document.querySelector('.op-clicked');
        if(activeButton){
            activeButton.classList.remove('op-clicked');
        }
        /*  1. Checks to see if the value of the button is included in the object of numbers.
            2. Checks to see if there are any stored values in arrayButtons. If list is empty
            numOne is assigned value of pressed button and appends other numbers to it.
            3. Add-to-screen function is called 
        */
        if (Object.values(calculator).includes(buttonText)) {
            console.log('In object');
            arrayButtons.length === 0 
            ? (numOne = numOne + buttonText, console.log('NumOne:', numOne), addToScreen(numOne))
            : (numOne = arrayButtons[arrayButtons.length-1], numTwo = numTwo + buttonText, addToScreen(numTwo));
            
        } else {

            if(buttonText ==="C"){
                clearVariables();

            }else if(buttonText === "Delete"){
                removeLastDigit() // remove digit function

            }else if(buttonText==="."){
                decimalButton();

            }else if(buttonText==="+/-"){
               let negativeNum = makeNegative();
               console.log('Is negative:', isNegative);
               addToScreen(negativeNum);

            }else if(numTwo === "" && numOne !== "") { // any regular operator case, handles if equal sign is pushed before num2
                operator = buttonText;
                button.classList.add('op-clicked'); // adds clicked class
                console.log('op-clicked')
                if (arrayButtons.length === 0) {
                    isNegative ? (console.log("is a negative function"), postNegative())
                    : (console.log("Pushing array as normal"), arrayButtons.push(numOne));
                }
                console.log(arrayButtons);
                console.log(operator);
                console.log("numTwo is empty")

            } else {
                if(buttonText === "=") {
                    if(numOne ==="") {
                        return
                    }
                    
                    if(isNegative){
                        postSecondNegative();
                    }
                    operation(numOne, numTwo, operator);
                } else { // continous operation with no reset
                    if(isNegative){
                        postSecondNegative();
                    }
                    if(numOne===""){
                        return
                    }
                    console.log('NumOne', numOne, 'Numtwo', numTwo, 'Operator', operator);
                    operation(numOne, numTwo, operator)
                    operator = buttonText;
                    button.classList.add('op-clicked') // adds clicked class
                    console.log('Operator', operator);
                    console.log(arrayButtons);
                }
            }
        
        }
    })
})

function makeNegative() {
    if(output.textContent==="") { // if screen is empty, return negative
        console.log('made negative')
        isNegative = true;
        let negString = "-"
        return(negString);
    }else{
        if(operator!="" && numTwo===""){ // if operator is not empty, and numtwo is empty, make negative true && return negative
            isNegative = true;          // return "-" before anything is inserted into numTwo
            return "-";
        }else if(operator ==="" && numTwo===""){ // if user wants to make sum negative
            let changedNum = (-1) * parseFloat(output.textContent);
            arrayButtons[arrayButtons.length-1] = arrayButtons[arrayButtons.length-1] * (-1);
            console.log("changedNum:", numOne);
            return changedNum
        }else{
            if(isNegative){
                let changedNum = (-1) * parseFloat(output.textContent);
                console.log("changing back to positive:")
                isNegative = false;
                return changedNum;
            }else {
                console.log('Change current screen value to negative.');
                let changedNum = (-1) * parseFloat(output.textContent);
                isNegative = true;
                return changedNum; // return output.text as a negative number
            }

        }
    }
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


function decimalButton() {
    if(operator ==="" && !numOne.includes('.')){
        numOne += '.';
        addToScreen(numOne);
    }else if (operator !== "" && !numTwo.includes('.')){
        numTwo += '.';
        addToScreen(numTwo);
    }
}

function removeLastDigit() {
    if(operator==="" && numTwo=="") {
        if(numOne.length > 0) {
            numOne = numOne.slice(0, -1);
            console.log("numOne", numOne);
            addToScreen(numOne);
        }
        console.log("hello")
    }else{
        if(numTwo.length > 0) {
            numTwo = numTwo.slice(0, -1);
            console.log("numTwo", numTwo);
            addToScreen(numTwo);
        } else {
            clearVariables(); // if delete is pressed on sum
        }
    }
}