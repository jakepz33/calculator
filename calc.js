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
    console.log(numTwo);
    return result;
}

// let numOne = "";
// let numTwo = "";
// let operator = "";
// let isNegative = false;



console.log(arrayButtons);

//ADD BUTTON TO SCREEN
//output.textContent = "";

// function to add inputs to screen
function addToScreen(item) {
    if(item==="-" && numOne===""){          // if negative button(+/-) is clicked and numOne not assigned, outputs "-" sign
        console.log('ItemOutput:', item);
        output.textContent = item;
    }else if(item==="-" && numTwo===""){   // if negative button(+/-) is clicked & numtwo not assigned, output "-" sign
        console.log('ItemOutput2:', item);
        output.textContent = item;
    }else{
        if(isNegative === true && numOne!=""){ // if negative is true and numOne is not empty, if number is less than 0,
            //isNegative = false;
            output.textContent = "";
            if(item < 0) { //if item is negative
                output.textContent = "-"+((-1)*item); // would make positive? but has negative sign right there.    
                console.log('Negative num', output.textContent);
            }else{
                console.log("func2 item:", item)  // makes a positive number already in screen negative. shows as negative but does make item neg
                output.textContent = "-"+ item;
                //numOne = parseFloat(output.textContent)
                console.log("NumOne:", numOne);
                console.log('Negative num2', output.textContent)
            };
            
        } else if(isNegative === true && numTwo!=""){
            output.textContent = "";
            if(item < 0) {
                output.textContent = "-"+((-1)*item);
                console.log('Negative num', output.textContent);
            }else{
                output.textContent = "-"+ item;
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

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (Object.values(calculator).includes(buttonText)) {
            console.log('In object');
            if (arrayButtons.length === 0) { // if no items in array
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
                        console.log("is negative function")
                        postNegative(); // function makes item negative and adds to list
                        // numOne = (-1) * parseInt(numOne);
                        // arrayButtons.push(numOne)
                        // isNegative = false;
                    }else{
                        console.log("else arrayButtons.push")
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
    if(output.textContent==="") { // if screen is empty, return negative
        console.log('made negative')
        isNegative = true;
        let negString = "-"
        return(negString);
    }else{
        if(operator!="" && numTwo===""){ // if operator is not empty, and numtwo is empty, make negative true && return negative
            isNegative = true;          // return "-" before anything is inserted into numTwo
            return "-";
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