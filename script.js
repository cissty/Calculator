// Display screen will be empty
// each button will display what's been pressed.
// 3 variables for each. 1 for first num, 1 for second num, 1 for symbol
// variables will be on display
// delete button will be delete the entered variable by one
// clear button will be delete everything 
// after entering first number and pressing the symbols, display will reset itself to wait
//-- for the second number.


//Setting variables//
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let sum = '';


const display = document.getElementById('tracker')


function pressedNumber(num) {
    firstNumber += num ;
    return firstNumber;
}


// Event listeners FOR EACH button //
//get a node list for numbers and symbols//

const resDelButtons = document.querySelectorAll('.top-button')
const buttons = document.querySelectorAll('.number');
console.log(buttons);


// ----- for RESET -------//
resDelButtons[0].addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    sum = '';
    display.textContent = firstNumber
});

// for DELETE



//Function for each button//
function button(index, number){
    buttons[index].addEventListener('click', () => {
        firstNumber = number;
        sum += firstNumber
        display.textContent = sum
    });
}

// for Number 7
button(0, '7');
// for Number 8
button(1, '8');
// for Number 9
button(2, '9');
// for Number 4
button(4, '4');
// for Number 5
button(5, '5');
// for Number 6
button(6, '6');
// for Number 1
button(8, '1');
// for Number 2
button(9, '2');
// for Number 2
button(10, '3');
// for Number 0
button(12, '0');
// for . symbol 
button(13, '.');



