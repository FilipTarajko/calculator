const buttonContainer = document.querySelector('#buttonContainer');
const valueDisplay = document.querySelector("#valueDisplay");

add = (a,b) => a+b;
substract = (a,b) => a-b;
multiply = (a,b) => a*b;
divide = (a,b) => a/b;

let activeOperator;
let toRemovePressed;
function clearPressed()
{
    toRemovePressed = document.getElementsByClassName('pressed');
    if(toRemovePressed.length>0)
    {
        toRemovePressed[0].classList.remove('pressed');
    }
}

function set(x)
{
    target = x;
    if (targetTemp)
    {
        temp = target;
    }
    else
    {
        value = target;
    }
    display();
}

function display()
{
    valueDisplay.textContent = target;
    if(valueDisplay.textContent.length>7)
    {
        valueDisplay.style.fontSize = `${700/valueDisplay.textContent.length}px`;
    }
    else
    {
        valueDisplay.style.fontSize = '100px';
    }
}

function evaluate()
{
    if (document.getElementsByClassName('pressed').length>0)
    {
        targetTemp = false;
        operation = document.getElementsByClassName('pressed')[0].id;
        set(operate(value, operation, temp));
        clearPressed();
    }
}

function press(id)
{
    target = targetTemp?temp:value;
    if(pressable.includes(id))
    {   
        evaluate();
        clearPressed();
        targetTemp = true;
        temp = 0;
        document.getElementById(id).classList.add('pressed');
    }
    else if(numbers.includes(parseInt(id)))
    {
        set(10*target+parseInt(id));
    }
    else if(id=="CE")
    {
        set(0);
    }
    else if(id=="C")
    {
        targetTemp = false;
        set(0);
        temp = 0;
        clearPressed();
    }
    else if(id=="+/-")
    {
        set(target*=-1);
    }
    else if(id=="⌫")
    {
        if(target>=0)
        {
            set(Math.floor(target/10));
        }
        else
        {
            set(Math.ceil(target/10));
        }
    }
    else if(id=="=")
    {
        evaluate();
    }
    console.log("wykryto "+id);
    console.log(`value: ${value}, temp: ${temp}, target: ${target}`);
}

function operate(a, operator, b){
    switch(operator)
    {
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}

let buttons = ['CE', 'C', '⌫', '÷' , 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, ',', '='];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let pressable = ['÷', 'x', '-', '+'];

function drawButtons()
{
    for(let i=0; i<20; i++)
    {
        let newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.id = buttons[i];
        newButton.textContent = buttons[i];
        newButton.addEventListener("click", function(){
            press(newButton.id);
        });
        buttonContainer.appendChild(newButton);
    }  
}

let operation;
let target = 0;
let targetTemp = false;
let value = 0;
let temp = 0;
drawButtons();
display();