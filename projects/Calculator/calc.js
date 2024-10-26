const output  = document.querySelector('.output');

let currentNumber = '';
let previousNumber = '';
let operation = null;

//function to add digit to the current input and display
const appendNumber = (number) =>{
    if(currentNumber.length <10){
        currentNumber += number;
        updateDisplay(currentNumber);
    }
   
}
const updateDisplay = (value) =>{
    output.textContent = value;
}

const setOperation = (op) =>{
    if (currenNumber = '')return ;
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay(operation);

}
const calculate = () =>{
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if(current === 0) return updateDisplay('Error: Division by zero');
            result = prev / current;
            break;
        default:
            return;
    }
    updateDisplay(result);
    previousNumber = '';
    currentNumber = '';
}

const clearDisplay = () =>{

    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay('');
}

const deleteNumber = () =>{
    if(currentNumber === ''){
        return;
    }
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay(currentNumber);
}