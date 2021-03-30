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

function drawButtons()
{
    for(let i=0; i<4; i++)
    {
        for(let j=0; j<4; j++)
        {
            let newButton = document.createElement('button');
            newButton.classList.add('button');
            newButton.style.height = '100px';
            newButton.style.width = '100px';
            buttonContainer.appendChild(newButton);
        }
    }
}

drawButtons();