const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;

        if (id === 'clear') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            screen.value = '';
        } else if (id === 'backspace') {
            currentNumber = currentNumber.slice(0, -1);
            screen.value = currentNumber;
        } else if (id === 'equals') {
            const result = calculate(previousNumber, currentNumber, operator);
            screen.value = result;
            currentNumber = result;
            previousNumber = '';
            operator = '';
        } else if (id === 'add' || id === 'subtract' || id === 'multiply' || id === 'divide') {
            operator = id;
            previousNumber = currentNumber;
            currentNumber = '';
        } else if (id === 'percent') {
            currentNumber = (parseFloat(currentNumber) / 100).toString();
            screen.value = currentNumber;
        } else {
            currentNumber += button.textContent;
            screen.value = currentNumber;
        }
    });
});

function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case 'percent':
            result = (parseFloat(num1) / 100) * parseFloat(num2);
            break;
        default:
            result = 0;
    }

    return result.toString();
}