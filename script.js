const buttonContainer = document.querySelector('#buttonContainer');
const valueDisplay = document.querySelector("#valueDisplay");

add = (a,b) => a+b;
substract = (a,b) => a-b;
multiply = (a,b) => a*b;
function divide(a,b){
    if(b!=0)
    {
        return a/b;
    }
    else
    {
        display("Can't divide by 0!");
        temp = 0;
        ignoreNext = true;
        return 0;
    }
};

function resetValues()
{
    toRemovePressed = undefined;
    ignoreNext = false;
    operation = undefined;
    target = 0;
    visibleTemp = false;
    targetTemp = false;
    value = 0;
    temp = 0;
}

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
    if(ignoreNext)
    {
        ignoreNext = false;
    }
    else
    {
        target = x;
        if (targetTemp)
        {
            temp = target;
            visibleTemp = true;
        }
        else
        {
            value = target;
            visibleTemp = false;
        }
        display();
    }
}

function display(toDisplay = target)
{
    valueDisplay.textContent = toDisplay;
    if(valueDisplay.textContent.length>7)
    {
        valueDisplay.style.fontSize = `${800/valueDisplay.textContent.length}px`;
    }
    else
    {
        valueDisplay.style.fontSize = '100px';
    }
}

function evaluate()
{
    if(operation || document.getElementsByClassName('pressed').length>0)
    {
        if (document.getElementsByClassName('pressed').length>0)
        {
            operation = document.getElementsByClassName('pressed')[0].id;
        }
        targetTemp = false;
        set(operate(value, operation, temp));
    }
}

function press(id)
{
    target = targetTemp?temp:value;
    if(pressable.includes(id))
    {   
        if(operation!=id || !operation)
        {
            if(temp!=0)
            {
                evaluate();
                temp = 0;
            }
            clearPressed();
            document.getElementById(id).classList.add('pressed');
        }
        else
        {
            clearPressed();
            document.getElementById(id).classList.add('pressed');
            evaluate();
        }
        targetTemp = true;
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
        target = value;
        targetTemp = false;
        set(0);
        clearPressed();
        resetValues();
    }
    else if(id=="+/-")
    {
        set(target*=-1);
    }
    else if(id=="⌫")
    {
        if(visibleTemp)
        {
            target = temp;
        }
        else
        {
            target = value;
        }
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

let toRemovePressed;
let ignoreNext;
let operation;
let target;
let visibleTemp;
let targetTemp;
let value;
let temp;

resetValues();
drawButtons();
display();