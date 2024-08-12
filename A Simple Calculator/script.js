'use strict';

// const buttons = document.querySelectorAll('.btn-wrapper button');
const displayExpression = document.querySelector('.input-container input');


const square = document.querySelector('#square')

function clickHandler(button){
    button.addEventlistner('click', ()=>{
        if(button.id === 'square'){
            displayExpression.value = Math.pow(displayExpression.value, 2);
        }
        if(button.id === 'sq-root'){
            displayExpression.value = Math.sqrt(displayExpression.value).toFixed(2);
        }
        if(button.id === 'evaluate'){
            displayExpression.value = eval(displayExpression.value);
        }
        if(button.id === 'all-clear'){
            displayExpression.value = '';
        }
        if(button.id === 'delete'){
            displayExpression.value = displayExpression.value.toString().slice(0, -1);
        }
        if(button.id === 'show'){
            switch (button.id) {
                case button.textContent = '+':
                    displayExpression.value += '+';
                    break;
                case button.textContent = '-':
                    displayExpression.value += '-';
                    break;
                case button.textContent = '*':
                    displayExpression.value += '*';
                    break;
                case button.textContent = '/':
                    displayExpression.value += '/';
                    break;
                case button.textContent = '1':
                    displayExpression.value += '1';
                    break;
                case button.textContent = '2':
                    displayExpression.value += '2';
                    break;
                case button.textContent = '3':
                    displayExpression.value += '3';
                    break;
                case button.textContent = '4':
                    displayExpression.value += '4';
                    break;
                case button.textContent = '5':
                    displayExpression.value += '5';
                    break;
                case button.textContent = '6':
                    displayExpression.value += '6';
                    break;
                case button.textContent = '7':
                    displayExpression.value += '7';
                    break;
                case button.textContent = '8':
                    displayExpression.value += '8';
                    break;
                case button.textContent = '9':
                    displayExpression.value += '9';
                    break;
                case button.textContent = '0':
                    displayExpression.value += '0';
                    break;
                case button.textContent = '.':
                    displayExpression.value += '.';
                    break;
            
                default:
                    break;
            }
        }

    })
}
clickHandler();





