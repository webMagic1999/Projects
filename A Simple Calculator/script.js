'use strict';

const buttons = document.querySelectorAll('.btn-wrapper button');
const displayExpression = document.querySelector('.input-container input');


function clickHandler(event) {
    const button = event.target;

            if (button.id === 'square') {
                displayExpression.value = Math.pow(displayExpression.value, 2);
            }
            if (button.id === 'sq-root') {
                displayExpression.value = Math.sqrt(displayExpression.value).toFixed(2);
            }
            if (button.id === 'evaluate') {
                displayExpression.value = eval(displayExpression.value);
            }
            if (button.id === 'all-clear') {
                displayExpression.value = '';
            }
            if (button.id === 'delete') {
                displayExpression.value = displayExpression.value.toString().slice(0, -1);
            }
            if (button.classList.contains('show')) {
                switch (button.textContent) {
                    case '+':
                        displayExpression.value += '+';
                        break;
                    case '-':
                        displayExpression.value += '-';
                        break;
                    case '*':
                        displayExpression.value += '*';
                        break;
                    case '/':
                        displayExpression.value += '/';
                        break;
                    case '1':
                        displayExpression.value += '1';
                        break;
                    case '2':
                        displayExpression.value += '2';
                        break;
                    case '3':
                        displayExpression.value += '3';
                        break;
                    case '4':
                        displayExpression.value += '4';
                        break;
                    case '5':
                        displayExpression.value += '5';
                        break;
                    case '6':
                        displayExpression.value += '6';
                        break;
                    case '7':
                        displayExpression.value += '7';
                        break;
                    case '8':
                        displayExpression.value += '8';
                        break;
                    case '9':
                        displayExpression.value += '9';
                        break;
                    case '0':
                        displayExpression.value += '0';
                        break;
                    case '.':
                        displayExpression.value += '.';
                        break;

                    default:
                        break;
                }
            }

}


buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
})





