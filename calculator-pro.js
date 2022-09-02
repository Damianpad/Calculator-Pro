const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

    console.log(calculator);
}

function inputDecimal(dot) {
    // If the `displayValue` property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}


function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

function updateDisplay() {
    // select the element with class of `valueBox`
    const display = document.querySelector('.valueBox');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.numPad');
keys.addEventListener('click', (event) => {
    // Access the clicked element
    const { target } = event;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
    console.log('digit', target.value)
});

// let value1 = document.querySelector('#valueBox');
// let btn = document.querySelectorAll('.num');
// let btn7 = document.querySelector('#num7');
// let btn8 = document.querySelector('#num8');

// btn.addEventListener('click', function handleClick() {
//   calculator.displayValue = document.querySelector('#num7').value;
//   value1.value =  calculator.displayValue
//   btn7.style.color = '#f16868';
// })


// btn7.addEventListener('click', function handleClick() {
//   calculator.displayValue = '7'
//   value1.value =  calculator.displayValue
//   btn7.style.color = '#f16868';
// })

// btn8.addEventListener('click', function handleClick() {
//   calculator.displayValue = '8'
//   value1.value =  calculator.displayValue
//   btn7.style.color = '#f16868';
// })


