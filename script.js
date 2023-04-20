// Display screen will be empty
// each button will display what's been pressed.
// 3 variables for each. 1 for first num, 1 for second num, 1 for symbol
// variables will be on display
// delete button will be delete the entered variable by one
// clear button will be delete everything 
// after entering first number and pressing the symbols, display will reset itself to wait
//-- for the second number.


//Setting variables//
let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let operator = '';
let displayValue = '';

const display = document.getElementById('tracker') // for number tracker
const prev = document.getElementById('prev')   // for previous calculation

const currentOperator = document.querySelectorAll('[data-operator]')


// Event listeners FOR EACH button //
//get a node list for numbers and symbols//

const resDelButtons = document.querySelectorAll('.top-button')
const buttons = document.querySelectorAll('.number');


// ----- for RESET -------//
resDelButtons[0].addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    isSecondNumber = false;
    display.textContent = '0';
    prev.textContent = '';
});

// for DELETE

resDelButtons[1].addEventListener('click', () => {
    if(isSecondNumber){
        secondNumber = secondNumber / 10 ^ 0;
        display.textContent = secondNumber;
    }
    else{
        firstNumber = firstNumber / 10 ^ 0;
        display.textContent = firstNumber;
       }
     }
    
    );

//Function for each button//
function button(index, number){
    buttons[index].addEventListener('click', () => {
      if(isSecondNumber){
        secondNumber +=  number;
        display.textContent = `${secondNumber}`;
        prev.textContent = '';

      } else{
        firstNumber +=  number;
        display.textContent = firstNumber;
        prev.textContent = '';
      }
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
// for Number 3
button(10, '3');
// for Number 0
button(12, '0');
// for . symbol 
button(13, '.');

// Operators

function operate(firstNumber, operator, secondNumber) {
    let result;
    switch(operator) {
        case '+':
            result = +firstNumber + +secondNumber;
            break;
        case '-':
            result = +firstNumber - +secondNumber;
            break;
        case '*':
            result = +firstNumber * +secondNumber;
            break;
        case '/':
            result = +firstNumber / +secondNumber;
            break;
       
    }
    return result;
}
// value variable assigns operators to the equals button
let isValue;
// --------- ADD -----------//
let totalValue;
buttons[15].addEventListener('click', () => {
    operator = '+'
    isSecondNumber = true;
    isValue = 1;
    display.textContent = firstNumber + operator;

});

// --------SUBTRACT--------//
buttons[11].addEventListener('click', () => {
    operator = '-'
    isSecondNumber = true;
    isValue = 2;
    display.textContent = firstNumber + operator;
});

// --------MULTIPLY--------//

buttons[7].addEventListener('click', () => {
    operator = 'x'
    isSecondNumber = true;
    isValue = 3;
    display.textContent = firstNumber + operator;
});

// --------DIVIDE--------//

buttons[3].addEventListener('click', () => {
    operator = '%'
    isSecondNumber = true;
    isValue = 4;
    display.textContent = firstNumber + operator;
});

//--------EQUALS-----------//
buttons[14].addEventListener('click', () => {
   if(isValue === 1){
        prev.textContent = `${firstNumber} + ${secondNumber} =`
        let result = operate(firstNumber, '+', secondNumber);
        display.textContent = result;
        firstNumber = '';
        secondNumber = '';
        isSecondNumber = false;


   }else if(isValue === 2){
        prev.textContent = `${firstNumber} - ${secondNumber} =`
        let result = operate(firstNumber, '-', secondNumber);
        display.textContent = result;
        firstNumber = '';
        secondNumber = '';
        isSecondNumber = false;
   
    }else if(isValue === 3){
        prev.textContent = `${firstNumber} x ${secondNumber} =`
        let result = operate(firstNumber, '*', secondNumber);
        display.textContent = result;
        firstNumber = '';
        secondNumber = '';
        isSecondNumber = false;
    
    }else if(isValue === 4){
        prev.textContent = `${firstNumber} % ${secondNumber} =`
        let result = operate(firstNumber, '/', secondNumber);
        display.textContent = result;
        firstNumber = '';
        secondNumber = '';
        isSecondNumber = false;
    }
    
});




