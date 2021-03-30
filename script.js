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

function displayValue()
{
    valueDisplay.textContent = value;
}

function press(id)
{
    clearPressed();
    if(pressable.includes(id))
    {
        document.getElementById(id).classList.add('pressed');
    }
    else if(numbers.includes(parseInt(id)))
    {
        value = 10*value+parseInt(id);
        displayValue();
    }
    else if(id=="C")
    {
        value = 0;
        displayValue();
    }
    else if(id=="+/-")
    {
        value*=-1;
        displayValue();
    }
    else if(id=="⌫")
    {
        if(value>=0)
        {
            value=Math.floor(value/10);
        }
        else
        {
            value=Math.ceil(value/10);
        }
        displayValue();
    }
    console.log("wykryto "+id);
}

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

let value = 0;
drawButtons();
displayValue();