console.log('script works!');

const buttonContainer = document.querySelector('#buttonContainer');

add = (a,b) => a+b;
substract = (a,b) => a-b;
multiply = (a,b) => a*b;
divide = (a,b) => a/b;

function operate(a, operator, b){
    if(operator == '+'){
        return add(a,b);
    }
    if(operator == '-'){
        return substract(a,b);
    }
    if(operator == '*'){
        return multiply(a,b);
    }
    if(operator == '/'){
        return divide(a,b);
    }
}

let buttons = ['CE', 'C', '⌫', '÷' , 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, ',', '='];

function drawButtons()
{
    for(let i=0; i<20; i++)
    {
        let newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.textContent = buttons[i];
        buttonContainer.appendChild(newButton);
    }  
}

drawButtons();